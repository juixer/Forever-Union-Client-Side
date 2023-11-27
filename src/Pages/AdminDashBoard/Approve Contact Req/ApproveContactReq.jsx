import { useQuery } from "@tanstack/react-query";
import Headline from "../../../Shared/Headline/Headline";
import { axiosSecure } from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { HashLoader } from "react-spinners";
import { Button, Table } from "flowbite-react";
import Swal from "sweetalert2";
import HelmetElement from "../../../Shared/HelmetElement/HelmetElement";
import { motion } from "framer-motion";

const ApproveContactReq = () => {
  const {
    isPending,
    refetch,
    error,
    data: pendingContactReq = [],
  } = useQuery({
    queryKey: ["pendingContactReq"],
    queryFn: async () => {
      const res = await axiosSecure.get("/pendingContact");
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

  const handleApproval = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to give access to this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/approveContactRequest/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Access Given!",
              text: "User get access of the contact information.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <motion.div
      className="my-5 max-w-4xl mx-auto"
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
        duration: 2,
      }}
    >
      <HelmetElement text={"Contact Request"} />
      <Headline text={"Contact Access Requests"} />
      {pendingContactReq === 0 ? (
        <h1 className="text-2xl text-center font-semibold mt-10">
          There is no Contact Access Request Available!
        </h1>
      ) : (
        <div className="overflow-x-auto my-10 shadow-xl">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Requester Name</Table.HeadCell>
              <Table.HeadCell>Requester Email</Table.HeadCell>
              <Table.HeadCell>Requester BioData ID</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {pendingContactReq.map((req) => {
                return (
                  <Table.Row
                    key={req._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800 font-semibold"
                  >
                    <Table.Cell className="whitespace-nowrap text-gray-900 font-semibold dark:text-white">
                      {req.name}
                    </Table.Cell>
                    <Table.Cell>{req.email}</Table.Cell>
                    <Table.Cell>{req.userBiodataId}</Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => handleApproval(req._id)}
                        gradientDuoTone="purpleToBlue"
                        className="font-semibold"
                      >
                        Approve
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      )}
    </motion.div>
  );
};

export default ApproveContactReq;
