import { useQuery } from "@tanstack/react-query";
import BioDataCard from "../../Shared/BioDataCard/BioDataCard";
import Container from "../../Shared/Container/Container";
import Headline from "../../Shared/Headline/Headline";
import Select from "react-select";
import { HashLoader } from "react-spinners";
import { axiosPublic } from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useEffect, useState } from "react";
import HelmetElement from "../../Shared/HelmetElement/HelmetElement";

const Biodatas = () => {
  // react select Data
  const type = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const division = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Chattagram", label: "Chattagram" },
    { value: "Rangpur", label: "Rangpur" },
    { value: "Barisal", label: "Barisal" },
    { value: "Khulna", label: "Khulna" },
    { value: "Maymansign", label: "Maymansign" },
    { value: "Sylhet", label: "Sylhet" },
  ];

  const [minAge, setMinAge] = useState(21);
  const [maxAge, setMaxAge] = useState(100);
  const [gender, setGender] = useState("");
  const [perDivision, setPerDivision] = useState("");

  const handleFilterData = (e) => {
    e.preventDefault();

    const form = e.target;
    const starAge = form.startAge.value;
    const endAge = form.endAge.value;
    const filter_gender = form.gender.value;
    const filter_division = form.division.value;

    setMinAge(starAge);
    setMaxAge(endAge);
    setGender(filter_gender);
    setPerDivision(filter_division);
  };

  const handleReset = () => {
    setMinAge(21);
    setMaxAge(100);
    setGender('');
    setPerDivision('');
  }

  // tan stack query
  const {
    isPending,
    error,
    refetch,
    data: biodata = [],
  } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/biodatas?minAge=${minAge}&maxAge=${maxAge}&gender=${gender}&division=${perDivision}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch, maxAge, minAge, gender, perDivision]);

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
    console.log(error.message);
  }
  return (
    <Container>
      <HelmetElement text={'BioDatas'}/>
      <div className="my-5">
        <Headline text={"BioDatas"} />
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="lg:w-1/4  px-3">
            <form onSubmit={handleFilterData}>
              <div>
                <h1 className="text-xl text-center font-bold">Filter By Age</h1>
                <div className="flex gap-5 justify-center mt-2 items-center">
                  <input
                    type="number"
                    name="startAge"
                    min={21}
                    max={100}
                    defaultValue={21}
                    className="w-20 rounded-lg"
                  />
                  <span className="font-bold">To</span>
                  <input
                    type="number"
                    name="endAge"
                    min={21}
                    max={100}
                    defaultValue={100}
                    className="w-20 rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-2">
                <h1 className="text-xl text-center font-bold">
                  Filter By Type
                </h1>
                <div className="mt-2">
                  <Select options={type} name="gender" />
                </div>
              </div>
              <div className="mt-2">
                <h1 className="text-xl text-center font-bold">
                  Filter By Permanent Division
                </h1>
                <div className="mt-2">
                  <Select options={division} name="division" />
                </div>
              </div>
              <p onClick={handleReset} className="text-center mt-3 font-semibold hover:underline hover:cursor-pointer">Reset</p>
              <input
                type="submit"
                className="w-full bg-lime-300 font-bold text-xl py-2 rounded-lg mt-5"
              />
            </form>
          </div>
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 ">
              {/* Cards */}
              {biodata.map((data) => (
                <BioDataCard key={data._id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Biodatas;
