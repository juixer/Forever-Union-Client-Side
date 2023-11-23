import Headline from "../../../../Shared/Headline/Headline";
const StatsCounter = () => {
  return (
    <div className="my-16 ">
      <Headline text={"Journey of Hearts"} />

      <div className="flex gap-5 flex-wrap justify-center items-center mt-10">
        {/* stats */}
        <div className="h-64 w-64 bg-black bg-opacity-60 text-white  rounded-lg border-b-8 border-lime-400 flex flex-col justify-center items-center">
            <img src="https://i.ibb.co/WFxQg62/group.png" className="w-36" />
            <h1 className="text-5xl font-bold animate-pulse delay-500">600</h1>
            <p className="font-semibold text-xl">Total BioData</p>
        </div>
        {/* stats */}
        <div className="h-64 w-64 bg-black bg-opacity-60 text-white  rounded-lg border-b-8 border-lime-400 flex flex-col justify-center items-center">
            <img src="https://i.ibb.co/hgpD8fc/male.png" className="w-36" />
            <h1 className="text-5xl font-bold animate-pulse delay-500">250</h1>
            <p className="font-semibold text-xl">Total Boys</p>
        </div>
        {/* stats */}
        <div className="h-64 w-64 bg-black bg-opacity-60 text-white  rounded-lg border-b-8 border-lime-400 flex flex-col justify-center items-center">
            <img src="https://i.ibb.co/cxgD3Mm/female.png" className="w-36" />
            <h1 className="text-5xl font-bold animate-pulse delay-500">250</h1>
            <p className="font-semibold text-xl">Total Girls</p>
        </div>
        {/* stats */}
        <div className="h-64 w-64 bg-black bg-opacity-60 text-white  rounded-lg border-b-8 border-lime-400 flex flex-col justify-center items-center">
            <img src="https://i.ibb.co/bbpxB6C/marriage.png" className="w-36" />
            <h1 className="text-5xl font-bold animate-pulse delay-500">100</h1>
            <p className="font-semibold text-xl">Total Marriage</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
