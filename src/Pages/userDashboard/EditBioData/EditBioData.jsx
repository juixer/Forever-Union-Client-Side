import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Headline from "../../../Shared/Headline/Headline";
import Select from "react-select";
import { useState } from "react";

const EditBioData = () => {
  const [gender, setGender] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [race, setRace] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [permanent, setPermanent] = useState(null);
  const [present, setPresent] = useState(null);
  const [exHeight, setExHeight] = useState(null);
  const [exWeight, setExWeight] = useState(null);

  // genderChange
  const genderChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setGender(value);
    }
  };

  // heightChange
  const heightChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setHeight(value);
    }
  };

  // weightChange
  const weightChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setWeight(value);
    }
  };

  // raceChange
  const raceChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setRace(value);
    }
  };

  // occupationChange
  const occupationChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setOccupation(value);
    }
  };

  // permanentChange
  const permanentChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setPermanent(value);
    }
  };

  // presentChange
  const presentChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setPresent(value);
    }
  };

  // exHeightChange
  const exHeightChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setExHeight(value);
    }
  };

  // exWeightChange
  const exWeightChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setExWeight(value);
    }
  };

  // auth info
  const { user } = useAuth();
  //  react select Data
  const genders = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const races = [
    { value: "Caucasian", label: "Caucasian" },
    { value: "Hispanic ", label: "Hispanic" },
    { value: "African American", label: "African American" },
    { value: "Asian", label: "Asian" },
    { value: "Middle Eastern", label: "Middle Eastern" },
  ];

  const occupations = [
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "Marketing Manager", label: "Marketing Manager" },
    { value: "Graphic Designer", label: "Graphic Designer" },
    { value: "Doctor", label: "Doctor" },
    { value: "Teacher", label: "Teacher" },
    { value: "Architect", label: "Architect" },
    { value: "Accountant", label: "Accountant" },
    { value: "Lawyer", label: "Lawyer" },
    { value: "Chef", label: "Chef" },
    { value: "Nurse", label: "Nurse" },
    { value: "Police Officer", label: "Police Officer" },
    { value: "Photographer", label: "Photographer" },
    { value: "Scientist", label: "Scientist" },
    { value: "Electrician", label: "Electrician" },
    { value: "Social Worker", label: "Social Worker" },
    { value: "Financial Analyst", label: "Financial Analyst" },
    { value: "Journalist", label: "Journalist" },
    { value: "Web Developer", label: "Web Developer" },
    { value: "Real Estate Agent", label: "Real Estate Agent" },
    { value: "Actor/Actress", label: "Actor/Actress" },
    { value: "Librarian", label: "Librarian" },
    { value: "Entrepreneur", label: "Entrepreneur" },
    { value: "Event Planner", label: "Event Planner" },
    { value: "Pilot", label: "Pilot" },
    { value: "Veterinarian", label: "Veterinarian" },
    { value: "Pharmacist", label: "Pharmacist" },
    { value: "Artist", label: "Artist" },
    { value: "Interior Designer", label: "Interior Designer" },
    { value: "Mechanical Engineer", label: "Mechanical Engineer" },
    { value: "Marketing Specialist", label: "Marketing Specialist" },
  ];

  const permaDivision = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Chattagram", label: "Chattagram" },
    { value: "Rangpur", label: "Rangpur" },
    { value: "Barisal", label: "Barisal" },
    { value: "Khulna", label: "Khulna" },
    { value: "Maymansign", label: "Maymansign" },
    { value: "Sylhet", label: "Sylhet" },
  ];

  const presentDivision = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Chattagram", label: "Chattagram" },
    { value: "Rangpur", label: "Rangpur" },
    { value: "Barisal", label: "Barisal" },
    { value: "Khulna", label: "Khulna" },
    { value: "Maymansign", label: "Maymansign" },
    { value: "Sylhet", label: "Sylhet" },
  ];

  const weights = [
    { value: "50", label: "50kg" },
    { value: "51", label: "51kg" },
    { value: "52", label: "52kg" },
    { value: "53", label: "53kg" },
    { value: "54", label: "54kg" },
    { value: "55", label: "55kg" },
    { value: "56", label: "56kg" },
    { value: "57", label: "57kg" },
    { value: "58", label: "58kg" },
    { value: "59", label: "59kg" },
    { value: "60", label: "60kg" },
    { value: "61", label: "61kg" },
    { value: "62", label: "62kg" },
    { value: "63", label: "63kg" },
    { value: "64", label: "64kg" },
    { value: "65", label: "65kg" },
    { value: "66", label: "66kg" },
    { value: "67", label: "67kg" },
    { value: "68", label: "68kg" },
    { value: "69", label: "69kg" },
    { value: "70", label: "70kg" },
    { value: "71", label: "71kg" },
    { value: "72", label: "72kg" },
    { value: "73", label: "73kg" },
    { value: "74", label: "74kg" },
    { value: "75", label: "75kg" },
    { value: "76", label: "76kg" },
    { value: "77", label: "77kg" },
    { value: "78", label: "78kg" },
    { value: "79", label: "79kg" },
    { value: "80", label: "80kg" },
    { value: "81", label: "81kg" },
    { value: "82", label: "82kg" },
    { value: "83", label: "83kg" },
    { value: "84", label: "84kg" },
    { value: "85", label: "85kg" },
    { value: "86", label: "86kg" },
    { value: "87", label: "87kg" },
    { value: "88", label: "88kg" },
    { value: "89", label: "89kg" },
    { value: "90", label: "90kg" },
    { value: "91", label: "91kg" },
    { value: "92", label: "92kg" },
    { value: "93", label: "93kg" },
    { value: "94", label: "94kg" },
    { value: "95", label: "95kg" },
    { value: "96", label: "96kg" },
    { value: "97", label: "97kg" },
    { value: "98", label: "98kg" },
    { value: "99", label: "99kg" },
    { value: "100", label: "100kg" },
    { value: "100+", label: "100kg+" },
  ];

  const expectedWeights = [
    { value: "50", label: "50kg" },
    { value: "51", label: "51kg" },
    { value: "52", label: "52kg" },
    { value: "53", label: "53kg" },
    { value: "54", label: "54kg" },
    { value: "55", label: "55kg" },
    { value: "56", label: "56kg" },
    { value: "57", label: "57kg" },
    { value: "58", label: "58kg" },
    { value: "59", label: "59kg" },
    { value: "60", label: "60kg" },
    { value: "61", label: "61kg" },
    { value: "62", label: "62kg" },
    { value: "63", label: "63kg" },
    { value: "64", label: "64kg" },
    { value: "65", label: "65kg" },
    { value: "66", label: "66kg" },
    { value: "67", label: "67kg" },
    { value: "68", label: "68kg" },
    { value: "69", label: "69kg" },
    { value: "70", label: "70kg" },
    { value: "71", label: "71kg" },
    { value: "72", label: "72kg" },
    { value: "73", label: "73kg" },
    { value: "74", label: "74kg" },
    { value: "75", label: "75kg" },
    { value: "76", label: "76kg" },
    { value: "77", label: "77kg" },
    { value: "78", label: "78kg" },
    { value: "79", label: "79kg" },
    { value: "80", label: "80kg" },
    { value: "81", label: "81kg" },
    { value: "82", label: "82kg" },
    { value: "83", label: "83kg" },
    { value: "84", label: "84kg" },
    { value: "85", label: "85kg" },
    { value: "86", label: "86kg" },
    { value: "87", label: "87kg" },
    { value: "88", label: "88kg" },
    { value: "89", label: "89kg" },
    { value: "90", label: "90kg" },
    { value: "91", label: "91kg" },
    { value: "92", label: "92kg" },
    { value: "93", label: "93kg" },
    { value: "94", label: "94kg" },
    { value: "95", label: "95kg" },
    { value: "96", label: "96kg" },
    { value: "97", label: "97kg" },
    { value: "98", label: "98kg" },
    { value: "99", label: "99kg" },
    { value: "100", label: "100kg" },
    { value: "100+", label: "100kg+" },
  ];

  const heights = [
    { value: "4'5", label: "4'5\"" },
    { value: "4'6", label: "4'6\"" },
    { value: "4'7", label: "4'7\"" },
    { value: "4'8", label: "4'8\"" },
    { value: "4'9", label: "4'9\"" },
    { value: "4'10", label: "4'10\"" },
    { value: "4'11", label: "4'11\"" },
    { value: "5'0", label: "5'0\"" },
    { value: "5'1", label: "5'1\"" },
    { value: "5'2", label: "5'2\"" },
    { value: "5'3", label: "5'3\"" },
    { value: "5'4", label: "5'4\"" },
    { value: "5'5", label: "5'5\"" },
    { value: "5'6", label: "5'6\"" },
    { value: "5'7", label: "5'7\"" },
    { value: "5'8", label: "5'8\"" },
    { value: "5'9", label: "5'9\"" },
    { value: "5'10", label: "5'10\"" },
    { value: "5'11", label: "5'11\"" },
    { value: "6'0", label: "6'0\"" },
    { value: "6'1", label: "6'1\"" },
    { value: "6'2", label: "6'2\"" },
    { value: "6-3", label: "6'3\"" },
    { value: "6'4", label: "6'4\"" },
    { value: "6'5", label: "6'5\"" },
    { value: "6'6", label: "6'6\"" },
    { value: "6'7", label: "6'7\"" },
    { value: "6'8", label: "6'8\"" },
    { value: "6'9", label: "6'9\"" },
    { value: "6'10", label: "6'10\"" },
    { value: "6'11", label: "6'11\"" },
    { value: "7'0", label: "7'0\"" },
    { value: "7'1", label: "7'1\"" },
    { value: "7'2", label: "7'2\"" },
    { value: "7'3", label: "7'3\"" },
    { value: "7'4", label: "7'4\"" },
    { value: "7'5", label: "7'5\"" },
    { value: "7'5+", label: "7'5+\"" },
  ];

  const expectedHeights = [
    { value: "4'5", label: "4'5\"" },
    { value: "4'6", label: "4'6\"" },
    { value: "4'7", label: "4'7\"" },
    { value: "4'8", label: "4'8\"" },
    { value: "4'9", label: "4'9\"" },
    { value: "4'10", label: "4'10\"" },
    { value: "4'11", label: "4'11\"" },
    { value: "5'0", label: "5'0\"" },
    { value: "5'1", label: "5'1\"" },
    { value: "5'2", label: "5'2\"" },
    { value: "5'3", label: "5'3\"" },
    { value: "5'4", label: "5'4\"" },
    { value: "5'5", label: "5'5\"" },
    { value: "5'6", label: "5'6\"" },
    { value: "5'7", label: "5'7\"" },
    { value: "5'8", label: "5'8\"" },
    { value: "5'9", label: "5'9\"" },
    { value: "5'10", label: "5'10\"" },
    { value: "5'11", label: "5'11\"" },
    { value: "6'0", label: "6'0\"" },
    { value: "6'1", label: "6'1\"" },
    { value: "6'2", label: "6'2\"" },
    { value: "6-3", label: "6'3\"" },
    { value: "6'4", label: "6'4\"" },
    { value: "6'5", label: "6'5\"" },
    { value: "6'6", label: "6'6\"" },
    { value: "6'7", label: "6'7\"" },
    { value: "6'8", label: "6'8\"" },
    { value: "6'9", label: "6'9\"" },
    { value: "6'10", label: "6'10\"" },
    { value: "6'11", label: "6'11\"" },
    { value: "7'0", label: "7'0\"" },
    { value: "7'1", label: "7'1\"" },
    { value: "7'2", label: "7'2\"" },
    { value: "7'3", label: "7'3\"" },
    { value: "7'4", label: "7'4\"" },
    { value: "7'5", label: "7'5\"" },
    { value: "7'5+", label: "7'5+\"" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(
      gender,
      height,
      weight,
      race,
      occupation,
      permanent,
      present,
      exHeight,
      exWeight
    );
  };

  return (
    <div className="my-10">
      <Headline text={"Edit Your BioData"} />
      <div className="max-w-4xl  mx-auto my-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Name<span className="font-semibold text-red-600">*</span>
              </h1>
              <input
                type="text"
                className="w-full rounded-lg"
                defaultValue={user?.displayName}
                {...register("name", { required: "Please Provide Your Name" })}
              />
              {errors.name && (
                <span className="font-semibold text-red-600">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold">Contact Email</h1>
              <input
                type="email"
                className="w-full rounded-lg"
                {...register("contactEmail")}
                defaultValue={user?.email}
                readOnly
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Phone<span className="font-semibold text-red-600">*</span>
              </h1>
              <input
                type="text"
                className="w-full rounded-lg"
                {...register("mobileNumber", {
                  required: "Please Provide Your Number",
                })}
                placeholder="Please Enter Your Phone Number"
              />
              {errors.mobileNumber && (
                <span className="font-semibold text-red-600">
                  {errors.mobileNumber.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Age<span className="font-semibold text-red-600">*</span>
              </h1>
              <input
                type="number"
                min={21}
                max={100}
                {...register("age", {
                  required: "Please Provide Your Age",
                })}
                className="w-full rounded-lg"
                placeholder="Starting From 21 Years Old"
              />
              {errors.age && (
                <span className="font-semibold text-red-600">
                  {errors.age.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Gender<span className="font-semibold text-red-600">*</span>
              </h1>
              <Select options={genders} onChange={genderChange} required />
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Date of Birth
                <span className="font-semibold text-red-600">*</span>
              </h1>
              <input
                type="date"
                {...register("dateOfBirth", {
                  required: "Please Provide Your Date Of Birth",
                })}
                className="w-full rounded-lg"
              />
              {errors.dateOfBirth && (
                <span className="font-semibold text-red-600">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Father Name<span className="font-semibold text-red-600">*</span>
              </h1>
              <input
                type="text"
                className="w-full rounded-lg"
                placeholder="Please Enter Your Father Name"
                {...register("fathersName", {
                  required: "Please Provide Your Father Name",
                })}
              />
              {errors.fathersName && (
                <span className="font-semibold text-red-600">
                  {errors.fathersName.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Mother Name<span className="font-semibold text-red-600">*</span>
              </h1>
              <input
                type="text"
                className="w-full rounded-lg"
                placeholder="Please Enter Your Mother Name"
                {...register("mothersName", {
                  required: "Please Provide Your Mother Name",
                })}
              />
              {errors.mothersName && (
                <span className="font-semibold text-red-600">
                  {errors.mothersName.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Height<span className="font-semibold text-red-600">*</span>
              </h1>
              <Select options={heights} onChange={heightChange} required />
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Weight<span className="font-semibold text-red-600">*</span>
              </h1>
              <Select options={weights} onChange={weightChange} required />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Race<span className="font-semibold text-red-600">*</span>
              </h1>
              <Select options={races} onChange={raceChange} required />
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Occupation
                <span className="font-semibold text-red-600">*</span>
              </h1>
              <Select
                options={occupations}
                onChange={occupationChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Permanent Division
                <span className="font-semibold text-red-600">*</span>
              </h1>
              <Select
                options={permaDivision}
                onChange={permanentChange}
                required
              />
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Present Division
                <span className="font-semibold text-red-600">*</span>
              </h1>
              <Select
                options={presentDivision}
                onChange={presentChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Expected Partner Height
                <span className="font-semibold text-red-600">*</span>
              </h1>
              <Select
                options={expectedHeights}
                onChange={exHeightChange}
                required
              />
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Expected Partner Weight
                <span className="font-semibold text-red-600">*</span>
              </h1>
              <Select
                options={expectedWeights}
                onChange={exWeightChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Expected Partner Age
                <span className="font-semibold text-red-600">*</span>
              </h1>
              <input
                type="number"
                min={21}
                max={100}
                className="w-full rounded-lg"
                placeholder="Starting From 21 Years Old"
                {...register("expectedPartnerAge", {
                  required: "Please Provide Your Partner Age",
                })}
              />
              {errors.expectedPartnerAge && (
                <span className="font-semibold text-red-600">
                  {errors.expectedPartnerAge.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <h1 className="text-xl font-semibold">
                Profile Picture
                <span className="font-semibold text-red-600">*</span>
              </h1>
              <input
                type="file"
                className="w-full border border-black rounded-lg"
                {...register("profileImage", {
                  required: "Please Provide Your Profile Picture",
                })}
              />
              {errors.profileImage && (
                <span className="font-semibold text-red-600">
                  {errors.profileImage.message}
                </span>
              )}
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Save And Publish"
              className="cursor-pointer font-bold text-xl w-full py-2 rounded-lg bg-gradient-to-r from-lime-300 to-emerald-400 mt-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBioData;
