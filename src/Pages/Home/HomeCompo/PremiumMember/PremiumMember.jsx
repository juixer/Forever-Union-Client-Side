import { Button } from "flowbite-react";
import Headline from "../../../../Shared/Headline/Headline";


const PremiumMember = () => {
  return (
    <div className="my-10">
      <Headline text={'Our Premium Members'}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
        {/* Cards */}
        <div className=" shadow-xl hover:shadow-lime-200 duration-300 p-2 space-y-2 border rounded-xl">
          <div className="flex justify-center items-center lg:gap-10 gap-5 space-y-2 rounded-xl flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/jDMGShY/rainy-1.png"
              className="full_round w-56"
            />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">
                BioData Id: <span className="font-medium">1</span>
              </h3>

              <h3 className="font-semibold text-lg">
                BioData Types: <span className="font-medium">Male</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Name: <span className="font-medium">Maharob Sazin</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Age: <span className="font-medium"> 26</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Occupation: <span className="font-medium"> Job</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Permanent Division: <span className="font-medium"> Khulna</span>
              </h3>
            </div>
          </div>
          <Button gradientMonochrome="lime" className="hover:animate-pulse font-bold w-full ">
            View Profile
          </Button>
        </div>
        {/* Cards */}
        <div className=" shadow-xl hover:shadow-lime-200 duration-300 p-2 space-y-2 border rounded-xl">
          <div className="flex justify-center items-center lg:gap-10 gap-5 space-y-2 rounded-xl flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/jDMGShY/rainy-1.png"
              className="full_round w-56"
            />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">
                BioData Id: <span className="font-medium">1</span>
              </h3>

              <h3 className="font-semibold text-lg">
                BioData Types: <span className="font-medium">Male</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Name: <span className="font-medium">Maharob Sazin</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Age: <span className="font-medium"> 26</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Occupation: <span className="font-medium"> Job</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Permanent Division: <span className="font-medium"> Khulna</span>
              </h3>
            </div>
          </div>
          <Button gradientMonochrome="lime" className="hover:animate-pulse font-bold w-full ">
            View Profile
          </Button>
        </div>
        {/* Cards */}
        <div className=" shadow-xl hover:shadow-lime-200 duration-300 p-2 space-y-2 border rounded-xl">
          <div className="flex justify-center items-center lg:gap-10 gap-5 space-y-2 rounded-xl flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/jDMGShY/rainy-1.png"
              className="full_round w-56"
            />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">
                BioData Id: <span className="font-medium">1</span>
              </h3>

              <h3 className="font-semibold text-lg">
                BioData Types: <span className="font-medium">Male</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Name: <span className="font-medium">Maharob Sazin</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Age: <span className="font-medium"> 26</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Occupation: <span className="font-medium"> Job</span>
              </h3>

              <h3 className="font-semibold text-lg">
                Permanent Division: <span className="font-medium"> Khulna</span>
              </h3>
            </div>
          </div>
          <Button gradientMonochrome="lime" className="hover:animate-pulse font-bold w-full ">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PremiumMember;
