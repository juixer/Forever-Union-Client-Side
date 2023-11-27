import { Table } from "flowbite-react";
import Headline from "../../../Shared/Headline/Headline";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import { HashLoader } from "react-spinners";
import TableRow from "./TableRow";
import HelmetElement from "../../../Shared/HelmetElement/HelmetElement";

const SuccessStory = () => {
  const {
    isPending,
    error,
    data: successStory = [],
  } = useQuery({
    queryKey: ["successStory"],
    queryFn: async () => {
      const res = await axiosPublic.get("/getSuccessStory");
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center py-44">
        <HashLoader color="#7ad737" />
      </div>
    );
  }
  if (error) {
    return console.log(error.message);
  }
  return (
    <div className="my-5 max-w-4xl mx-auto">
      <HelmetElement text={'Success Story'}/>
      <Headline text={"Success Stories!"} />
      <div className="my-10">
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>User BioData ID</Table.HeadCell>
              <Table.HeadCell>Partner BioData ID</Table.HeadCell>
              <Table.HeadCell>View</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {successStory.map((story) => (
                <TableRow key={story._id} story={story} />
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
