import Container from "../../Shared/Container/Container";
import HelmetElement from "../../Shared/HelmetElement/HelmetElement";
import Banner from "./HomeCompo/Banner/Banner";
import HowWorks from "./HomeCompo/HowWorks/HowWorks";
import PremiumMember from "./HomeCompo/PremiumMember/PremiumMember";
import StatsCounter from "./HomeCompo/StatsCounter/StatsCounter";
import SuccessStory from "./HomeCompo/SuccessStory/SuccessStory";

const Home = () => {
  return (
    <Container>
      <HelmetElement text={'Home'}/>
      <div>
        <Banner />
        <PremiumMember />
        <HowWorks />
        <StatsCounter />
        <SuccessStory />
      </div>
    </Container>
  );
};

export default Home;
