import { HashLoader } from "react-spinners";
import usePremiumUser from "../../../../Hooks/usePremiumUser/usePremiumUser";
import BioDataCard from "../../../../Shared/BioDataCard/BioDataCard";
import Headline from "../../../../Shared/Headline/Headline";

const PremiumMember = () => {
  const { isPending, error, premiumUser } = usePremiumUser();
  if (isPending) {
    return (
      <div className="flex justify-center items-center py-44">
        <HashLoader color="#7ad737" />
      </div>
    );
  }
  if (error) {
    return console.log(error.message);
  }
  
  return (
    <div className="my-10">
      <Headline text={"Our Premium Members"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 ">
        {/* Cards */}
        {premiumUser.map((data) => (
          <BioDataCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default PremiumMember;
