import { HashLoader } from "react-spinners";
import usePremiumUser from "../../../../Hooks/usePremiumUser/usePremiumUser";
import BioDataCard from "../../../../Shared/BioDataCard/BioDataCard";
import Headline from "../../../../Shared/Headline/Headline";

const PremiumMember = () => {
  const { isPending, error, premiumUser } = usePremiumUser();
  if (isPending) {
    <div className="flex justify-center items-center py-44">
      <HashLoader color="#7ad737" />
    </div>;
  }
  if (error) {
    console.log(error.message);
  }
  return (
    <div className="my-10">
      <Headline text={"Our Premium Members"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 ">
        {/* Cards */}
        {premiumUser.map(user => <BioDataCard key={user._id} user={user}/>)}
      </div>
    </div>
  );
};

export default PremiumMember;
