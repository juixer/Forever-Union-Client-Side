import useStats from "../../../../Hooks/useStats/useStats";
import Headline from "../../../../Shared/Headline/Headline";
import StatsCard from "../../../../Shared/StatsCard/StatsCard";
const StatsCounter = () => {

  const {stats} = useStats()
  console.log(stats);
  return (
    <div className="my-16 ">
      <Headline text={"Journey of Hearts"} />

      <div className="flex gap-5 flex-wrap justify-center items-center mt-10">
        {/* stats */}

        <StatsCard
          img={"https://i.ibb.co/WFxQg62/group.png"}
          count={stats.totalBioData}
          title={"Total BioData"}
        />
        {/* stats */}

        <StatsCard
          img={"https://i.ibb.co/hgpD8fc/male.png"}
          count={stats.totalBoys}
          title={"Total Boys"}
        />
        {/* stats */}

        <StatsCard
          img={"https://i.ibb.co/cxgD3Mm/female.png"}
          count={stats.totalGirls}
          title={"Total Girls"}
        />

        {/* stats */}
        <StatsCard
          img={"https://i.ibb.co/bbpxB6C/marriage.png"}
          count={stats.totalMarriage}
          title={"Total Marriage"}
        />
      </div>
    </div>
  );
};

export default StatsCounter;
