import { useEffect, useState } from "react";
import Headline from "../../../Shared/Headline/Headline";
import { axiosPublic } from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { Button } from "flowbite-react";
import { FaCrown } from "react-icons/fa6";
import Swal from "sweetalert2";

const VIewBioData = () => {
  const [myData, setMyData] = useState({});

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      axiosPublic.get(`/mydata/${user.email}`).then((res) => {
        setMyData(res.data);
      });
    }
  }, [user]);

  const {
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
    mobileNumber,
    permanentDivision,
    presentDivision,
  } = myData;

  const handlePremium = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "To Make Your BioData Premium",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const wantToPremium = {
          contactEmail,
          status: "pending",
        };
        axiosPublic.patch("/biodatas", wantToPremium).then((res) => {
          if (res.data.matchedCount > 0) {
            Swal.fire({
              title: "Request Pending!",
              text: "Please Wait for Admin Approval.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="my-5 max-w-7xl mx-auto">
      <Headline text={"Your BioData Details"} />
      <div className="my-16">
        <div className="flex flex-col justify-center items-center  gap-5 rounded-xl p-5 shadow-2xl">
          {/* box */}
          <div className="flex gap-16 md:flex-row flex-col">
            <img src={profileImage} className="full_round w-80" />
            <div className="flex flex-col gap-3">
              <h1 className="md:text-5xl text-3xl font-light">{name}</h1>

              <h1 className="md:text-3xl text-xl font-light">
                Gender: {gender}
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Date of Birth: {dateOfBirth}
              </h1>

              <h1 className="md:text-3xl text-xl font-light">Age: {age} Y/O</h1>

              <h1 className="md:text-3xl text-xl font-light">Race: {race} </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Occupation: {occupation}
              </h1>
            </div>
          </div>
          {/* BOX */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
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

            <h1 className="md:text-3xl text-xl font-light">
              Expected Partner Weight: {expectedPartnerWeight}kg
            </h1>

            <h1 className="md:text-3xl text-xl font-light">
              Email: <span className="underline text-2xl">{contactEmail}</span>
            </h1>

            <h1 className="md:text-3xl text-xl font-light">
              Phone:
              <span className="text-2xl"> {mobileNumber}</span>
            </h1>

            <Button
              onClick={handlePremium}
              gradientMonochrome="lime"
              className="hover:animate-pulse font-bold w-full "
            >
              <FaCrown className="mr-3" /> Upgrade to Premium
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIewBioData;
