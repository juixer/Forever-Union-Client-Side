import BioDataCard from "../../Shared/BioDataCard/BioDataCard";
import Container from "../../Shared/Container/Container";
import Headline from "../../Shared/Headline/Headline";
import Select from "react-select";

const Biodatas = () => {
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
  return (
    <Container>
      <div className="my-5">
        <Headline text={"BioDatas"} />
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="lg:w-1/4  px-3">
            <form>
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
                  <Select options={type} />
                </div>
              </div>
              <div className="mt-2">
                <h1 className="text-xl text-center font-bold">
                  Filter By Division
                </h1>
                <div className="mt-2">
                  <Select options={division} />
                </div>
              </div>
              <input
                type="submit"
                className="w-full bg-lime-300 font-bold text-xl py-2 rounded-lg mt-5"
              />
            </form>
          </div>
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
              {/* Cards */}
              <BioDataCard />
              <BioDataCard />
              <BioDataCard />
              <BioDataCard />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Biodatas;