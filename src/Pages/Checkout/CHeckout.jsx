import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import Headline from "../../Shared/Headline/Headline";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useEffect, useState } from "react";
import { axiosPublic } from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import HelmetElement from "../../Shared/HelmetElement/HelmetElement";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

const CHeckout = () => {
  const [myData, setMyData] = useState({});

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      axiosPublic.get(`/mydata/${user.email}`).then((res) => {
        setMyData(res.data);
      });
    }
  }, [user]);
  const reqContact = useLoaderData();
  return (
    <Container>
      <HelmetElement text={'CheckOut'}/>
      <div className="my-5 max-w-3xl mx-auto">
        <Headline text={"Checkout"} />
        <div className="mt-8">
          <h1 className="text-3xl mb-2 font-semibold text-center">
            Price: 500tk
          </h1>
          <div>
            <Elements stripe={stripePromise}>
              <Payment reqData={reqContact} myData={myData} user={user} />
            </Elements>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CHeckout;
