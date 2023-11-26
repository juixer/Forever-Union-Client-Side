import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Payment = ({ reqData, myData, user }) => {
  const [paymentErr, setPaymentErr] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const priceInt = parseInt(import.meta.env.VITE_PRICE);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: priceInt })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [priceInt]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(`payment method error : ${error}`);
      setPaymentErr(error.message);
    } else {
      console.log(`payment method`, paymentMethod);
      setPaymentErr("");
    }

    // confirm payment

    const { paymentIntent, error: confirmErr } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmErr) {
      console.log(confirmErr);
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user.email,
          name: user.displayName,
          price: priceInt,
          transID: paymentIntent.id,
          reqName: reqData.name,
          reqBiodataId: reqData.biodataId,
          userBiodataId: myData.biodataId,
          reqEmail: reqData.contactEmail,
          reqPhone: reqData.mobileNumber,
          contactStatus: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        if (res.data.paymentResult.insertedId) {
            navigate('/')
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Complete, Please Wait for Admin Verification",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full">
            <h1 className="text-xl m-2">BioData ID</h1>
            <input
              type="number"
              defaultValue={reqData.biodataId}
              className="rounded-lg w-full"
              readOnly
            />
          </div>
          <div className="w-full">
            <h1 className="text-xl m-2">Your BioData ID</h1>
            <input
              type="number"
              defaultValue={myData.biodataId}
              className="rounded-lg w-full"
              readOnly
            />
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-xl m-2">Your Email</h1>
          <input
            type="email"
            defaultValue={user.email}
            className="rounded-lg w-full"
            readOnly
          />
        </div>
        <CardElement
          className="border mt-5 p-3 rounded-lg border-black "
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <span className="text-red-600 font-semibold">{paymentErr}</span>
        {transactionId && (
          <span className="text-green-600 font-semibold">
            Transaction ID : {transactionId}
          </span>
        )}
        <input
          disabled={!stripe || !clientSecret}
          type="submit"
          value="Pay"
          className="cursor-pointer font-bold text-xl mt-5 w-full py-2 rounded-lg bg-gradient-to-r from-lime-300 to-emerald-400 "
        />
      </form>
    </div>
  );
};

export default Payment;
