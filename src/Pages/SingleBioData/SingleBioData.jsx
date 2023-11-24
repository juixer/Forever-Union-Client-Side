import { Button } from "flowbite-react";
import BioDataCard from "../../Shared/BioDataCard/BioDataCard";
import Container from "../../Shared/Container/Container";
import { FaHeart, FaLock } from "react-icons/fa6";

const SingleBioData = () => {
  const user = true;
  return (
    <Container>
      <div className="my-5 flex lg:flex-row flex-col gap-10">
        <div className="lg:w-[60%]">
          <h1 className="text-center md:text-5xl text-2xl font-bold my-10">
            Maharob Hossain Details
          </h1>
          <div className="flex flex-col gap-5">
            {/* box */}
            <div className="flex justify-center items-center gap-16 md:flex-row flex-col">
              <img
                src="https://i.ibb.co/jDMGShY/rainy-1.png"
                className="full_round w-80"
              />
              <div className="flex flex-col gap-3">
                <h1 className="md:text-5xl text-3xl font-light">
                  Maharob Hossain
                </h1>

                <h1 className="md:text-3xl text-xl font-light">Gender: Male</h1>

                <h1 className="md:text-3xl text-xl font-light">
                  Date of Birth: 24-04-1999
                </h1>

                <h1 className="md:text-3xl text-xl font-light">Age: 24 Y/O</h1>

                <h1 className="md:text-3xl text-xl font-light">Race: Islam</h1>

                <h1 className="md:text-3xl text-xl font-light">
                  Occupation: Student
                </h1>
              </div>
            </div>
            {/* BOX */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 ">
              <h1 className="md:text-3xl text-xl font-light">
                Father Name: Naruto Uzumaki
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Mother Name: Hinata Uzumaki
              </h1>

              <h1 className="md:text-3xl text-xl font-light">Height: 6ft</h1>

              <h1 className="md:text-3xl text-xl font-light">Weight: 75kg</h1>

              <h1 className="md:text-3xl text-xl font-light">
                Permanent Division: Dhaka
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Present Division: Khulna
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Expected Partner Age: 7 Y/O
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Expected Partner Height: 7inc
              </h1>

              <h1 className="md:text-3xl text-xl font-light">
                Expected Partner Weight:
                <span className="font-light text-2xl"> 150kg </span>
              </h1>
            </div>
            {/* box */}
            <div>
              <Button
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
              {user ? (
                <div className="flex flex-col justify-center items-center gap-5 mt-5">
                  <h1 className="md:text-3xl text-xl font-light">
                    Email:{" "}
                    <span className="underline text-2xl">
                      shantoking3@gmail.com
                    </span>
                  </h1>
                  <h1 className="md:text-3xl text-xl font-light">
                    Phone:
                    <span className="text-2xl"> 0179199005</span>
                  </h1>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center gap-3">
                  <img src="https://i.ibb.co/cY64wtN/contactlocked.png" className="w-44"/>
                  <h1 className="font-semibold text-xl">BioData Contact Information Locked
                      Pay 500TK to Get Access of the Contact
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
          <div className="flex flex-col gap-10">
            <BioDataCard />
            <BioDataCard />
            <BioDataCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleBioData;
