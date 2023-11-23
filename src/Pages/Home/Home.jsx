import Banner from "./HomeCompo/Banner/Banner";
import PremiumMember from "./HomeCompo/PremiumMember/PremiumMember";
import StatsCounter from "./HomeCompo/StatsCounter/StatsCounter";
import SuccessStory from "./HomeCompo/SuccessStory/SuccessStory";

const Home = () => {
  return (
    <div>
      <Banner />
      <PremiumMember />
      <StatsCounter />
      <SuccessStory/>
    </div>
  );
};

export default Home;
