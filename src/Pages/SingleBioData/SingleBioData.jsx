import { Button } from "flowbite-react";
import Container from "../../Shared/Container/Container";
import { FaHeart, FaLock } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../Hooks/useAxiosPublic/useAxiosPublic";
import BioDataCard from "../../Shared/BioDataCard/BioDataCard";
import { HashLoader } from "react-spinners";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import usePremium from "../../Hooks/usePremium/usePremium";

const SingleBioData = () => {
  const { user } = useAuth();
  const { isPremium } = usePremium();

  const bioDataInfo = useLoaderData();
  const {
    _id,
    name,
    profileImage,
    gender,
    dateOfBirth,
    height,
    weight,
    age,
    occupation,
    race,
    fathersName,
    mothersName,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    contactEmail,
    biodataId,
    mobileNumber,
    permanentDivision,
    presentDivision,
  } = bioDataInfo;

  // get status

  // Tan Stack query reco data
  const {
    isPending,
    error,
    data: matchedData = [],
  } = useQuery({
    queryKey: ["matchedData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas/gender/${gender}`);
      return res.data;
    },
  });

  if (isPending) {
    return (
      <Container>
        <div className="flex justify-center items-center py-44">
          <HashLoader color="#7ad737" />
        </div>
      </Container>
    );
  }

  if (error) {
    return console.log(error.message);
  }

  // handle add to favorites
  const handleAddToFavorite = async () => {
    const favInfo = {
      userEmail: user?.email,
      name,
      biodataId,
      permanentDivision,
      occupation,
    };

    const res = await axiosPublic.post("/favorite", favInfo);
    if (res.data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Added to Your Favorites",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // filter
  const filterMatchedData = matchedData.filter((data) => data._id !== _id);
  return (
    <Container>
      <div className="my-5 flex lg:flex-row flex-col gap-10">
        <div className="lg:w-[60%] p-5 shadow-2xl rounded-xl">
          <h1 className="text-center md:text-5xl text-2xl font-bold my-10">
            BioData ID-{biodataId} Details
          </h1>
          <div className="flex flex-col gap-5">
            {/* box */}
            <div className="flex justify-center items-center gap-16 md:flex-row flex-col">
              <img src={profileImage} className="full_round w-80" />
              <div className="flex flex-col gap-3">
                <h1 className="md:text-5xl text-3xl font-light">{name}</h1>

                <h1 className="md:text-3xl text-xl font-light">
                  Gender: {gender}
                </h1>

                <h1 className="md:text-3xl text-xl font-light">
                  Date of Birth: {dateOfBirth}
                </h1>

                <h1 className="md:text-3xl text-xl font-light">
                  Age: {age} Y/O
                </h1>

                <h1 className="md:text-3xl text-xl font-light">
                  Race: {race}{" "}
                </h1>

                <h1 className="md:text-3xl text-xl font-light">
                  Occupation: {occupation}
                </h1>
              </div>
            </div>
            {/* BOX */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 ">
              <h1 className="md:text-3xl text-xl font-light">
                Father Name: {fathersName}
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Mother Name: {mothersName}
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Height: {height}&quot;
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Weight: {weight}kg
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Permanent Division: {permanentDivision}
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Present Division: {presentDivision}
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Expected Partner Age: {expectedPartnerAge} Y/O
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Expected Partner Height: {expectedPartnerHeight}&quot;
              </h1>

              <h1 className="md:text-3xl text-xl font-light md:col-span-2">
                Expected Partner Weight: {expectedPartnerWeight}kg
              </h1>
            </div>
            {/* box */}
            <div>
              <Button
                onClick={handleAddToFavorite}
                gradientMonochrome="lime"
                className="hover:animate-pulse font-bold w-full "
              >
                <FaHeart className="mr-2" /> Add To Favorite
              </Button>
            </div>
            <div>
              <h1 className="text-center md:text-5xl text-2xl font-bold my-5">
                Contact Information
              </h1>
              {isPremium?.status === "premium" && (
                <div className="flex flex-col justify-center items-center gap-5 mt-5">
                  <h1 className="md:text-3xl text-xl font-light">
                    Email:{" "}
                    <span className="underline text-2xl">{contactEmail}</span>
                  </h1>
                  <h1 className="md:text-3xl text-xl font-light">
                    Phone:
                    <span className="text-2xl"> {mobileNumber}</span>
                  </h1>
                </div>
              )}
              {isPremium?.status === 'normal' && (
                <div className="flex flex-col justify-center items-center gap-3">
                  <img
                    src="https://i.ibb.co/cY64wtN/contactlocked.png"
                    className="w-44"
                  />
                  <h1 className="font-semibold text-xl">
                    BioData Contact Information Locked Pay 500TK to Get Access
                    of the Contact
                  </h1>
                  <Button
                    gradientMonochrome="lime"
                    className="animate-pulse font-bold w-full "
                  >
                    <FaLock className="mr-2" /> Request Contact Information
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <div className="flex flex-col gap-y-10">
            <h1 className="text-center md:text-5xl text-2xl font-bold">
              Recommendation
            </h1>
            {filterMatchedData.map((data) => (
              <BioDataCard key={data._id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleBioData;
