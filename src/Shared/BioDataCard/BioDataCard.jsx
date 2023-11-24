import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const BioDataCard = ({ user }) => {
  const {
    _id,
    name,
    gender,
    age,
    occupation,
    biodataId,
    permanentDivision,
    profileImage,
  } = user;
  return (
    <div className=" shadow-xl hover:shadow-lime-200 duration-300 p-2 space-y-2 border rounded-xl ">
      <div className="flex justify-center items-center lg:gap-10 gap-5 space-y-2 rounded-xl flex-col md:flex-row">
        <img src={profileImage} className="full_round w-56" />
        <div className="space-y-2 flex">
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">
              BioData Id: <span className="font-medium">{biodataId}</span>
            </h3>

            <h3 className="font-semibold text-lg">
              Gender: <span className="font-medium">{gender} </span>
            </h3>

            <h3 className="font-semibold text-lg">
              Name: <span className="font-medium">{name}</span>
            </h3>

            <h3 className="font-semibold text-lg">
              Age: <span className="font-medium"> {age} Y/O</span>
            </h3>

            <h3 className="font-semibold text-lg">
              Occupation: <span className="font-medium"> {occupation}</span>
            </h3>

            <h3 className="font-semibold text-lg">
              Permanent Division:{" "}
              <span className="font-medium"> {permanentDivision}</span>
            </h3>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/bioDetails/${_id}`}>
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
