import BioDataCard from "../../../../Shared/BioDataCard/BioDataCard";
import Headline from "../../../../Shared/Headline/Headline";


const PremiumMember = () => {
  return (
    <div className="my-10">
      <Headline text={'Our Premium Members'}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
        {/* Cards */}
        <BioDataCard/>
        <BioDataCard/>
        <BioDataCard/>
      </div>
    </div>
  );
};

export default PremiumMember;
