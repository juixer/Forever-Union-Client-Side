import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const BioDataCard = () => {
  return (
    <div className=" shadow-xl hover:shadow-lime-200 duration-300 p-2 space-y-2 border rounded-xl ">
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
            Age: <span className="font-medium"> 26 Y/O</span>
          </h3>

          <h3 className="font-semibold text-lg">
            Occupation: <span className="font-medium"> Job</span>
          </h3>

          <h3 className="font-semibold text-lg">
            Permanent Division: <span className="font-medium"> Khulna</span>
          </h3>
        </div>
      </div>
      <div>
        <Link to={"/bioDetails"}>
          <Button
            gradientMonochrome="lime"
            className="hover:animate-pulse font-bold w-full "
          >
            View Profile
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BioDataCard;
