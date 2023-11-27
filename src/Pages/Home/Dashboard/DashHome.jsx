import Lottie from "lottie-react";
import Headline from "../../../Shared/Headline/Headline";
import dashBoardAni from "../../../assets/dashboard.json";
import useAuth from "../../../Hooks/useAuth/useAuth";
import HelmetElement from "../../../Shared/HelmetElement/HelmetElement";
import { motion } from "framer-motion";

const DashHome = () => {
  const { user } = useAuth();
  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
        duration: 2,
      }}
    >
      <HelmetElement text={"Dashboard"} />
      <Headline text={`Welcome Back, ${user?.displayName}`} />
      <Lottie animationData={dashBoardAni} loop={true} />
    </motion.div>
  );
};

export default DashHome;
