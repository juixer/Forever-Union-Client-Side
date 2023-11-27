import Container from "../../Shared/Container/Container";
import HelmetElement from "../../Shared/HelmetElement/HelmetElement";
import Banner from "./HomeCompo/Banner/Banner";
import HowWorks from "./HomeCompo/HowWorks/HowWorks";
import PremiumMember from "./HomeCompo/PremiumMember/PremiumMember";
import StatsCounter from "./HomeCompo/StatsCounter/StatsCounter";
import SuccessStory from "./HomeCompo/SuccessStory/SuccessStory";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
    initial={{ scale: 0 }}
    animate={{ rotate: 0, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 50,
      duration: 2
    }}
    >
      <Container>
        <HelmetElement text={"Home"} />
        <div>
          <Banner />
          <PremiumMember />
          <HowWorks />
          <StatsCounter />
          <SuccessStory />
        </div>
      </Container>
    </motion.div>
  );
};

export default Home;
