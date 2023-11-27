import Container from "../../Shared/Container/Container";
import Headline from "../../Shared/Headline/Headline";
import HelmetElement from "../../Shared/HelmetElement/HelmetElement";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
        duration: 2,
      }}
    >
      <Container>
        <HelmetElement text={"Contact Us"} />
        <Headline text={"Contact Us"} />
        <div className="max-w-3xl mx-auto space-y-5 mt-5">
          <p className="font-semibold">
            Thank you for considering Forever Union for your matrimonial needs.
            We are here to assist you in every step of your journey towards
            finding a lifelong companion. Whether you have questions, feedback,
            or need support, we encourage you to reach out to us.
          </p>

          <h1 className="text-3xl font-bold text-center">Customer Support</h1>
          <p className="font-semibold">
            Our dedicated customer support team is ready to assist you with any
            inquiries or concerns you may have. Feel free to contact us via
            email, phone, or through our online support system.
          </p>

          <p className="font-semibold">
            <span className="font-bold text-xl">Email:</span>{" "}
            support@foreverunion.com
          </p>
          <p className="font-semibold">
            <span className="font-bold text-xl">Phone:</span> +8801743856376
          </p>

          <h1 className="text-3xl font-bold text-center">Business Inquiries</h1>
          <p className="font-semibold">
            For business-related inquiries, partnerships, or collaborations,
            please reach out to our business development team.
          </p>

          <p className="font-semibold">
            <span className="font-bold text-xl">Email:</span>{" "}
            business@foreverunion.com
          </p>
          <p className="font-semibold">
            <span className="font-bold text-xl">Phone:</span> +8801743856355
          </p>

          <h1 className="text-3xl font-bold text-center">Visit Us</h1>
          <p className="font-semibold">
            If you prefer an in-person meeting or want to send us something by
            mail, you can visit our office.
          </p>

          <p className="font-semibold">
            <span className="font-bold text-xl">
              Forever Union Headquarters:
            </span>{" "}
            123 Union Street Cityville, State, Country ZIP Code: XXXXX
          </p>

          <h1 className="text-3xl font-bold text-center">
            We Value Your Feedback
          </h1>
          <p className="font-semibold">
            Your feedback is essential to us. Whether you have suggestions for
            improvement or positive experiences to share, we appreciate hearing
            from you.
          </p>

          <h1 className="text-3xl font-bold text-center">Connect with Us</h1>
          <p className="font-semibold">
            Feel free to connect with us on social media, subscribe to our
            newsletter for updates, or drop us a message through the contact
            form on our website. Thank you for choosing Forever Union. We look
            forward to assisting you on your journey to a forever union.
          </p>
        </div>
      </Container>
    </motion.div>
  );
};

export default ContactUs;
