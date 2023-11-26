import { Button, Table } from "flowbite-react";
import Headline from "../../../Shared/Headline/Headline";
import { HashLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const ContactRequest = () => {
  const { user } = useAuth();
  const {
    isPending,
    refetch,
    error,
    data: myRequest = [],
  } = useQuery({
    queryKey: ["myRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contactRequest/${user.email}`);
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

  //   handle delete
  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/contactRequest/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Contact Request deleted!",
                icon: "success",
              });
            }
          });
        }
      });
  }

  return (
    <div className="my-5 max-w-4xl mx-auto">
      <Headline text={"Your Contact Requests"} />
      {myRequest.length === 0 ? (
        <h1 className="text-2xl text-center font-semibold mt-10">
          You have not made any request!
        </h1>
      ) : (
        <div className="overflow-x-auto my-10 shadow-xl">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>BioData ID</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Mobile No.</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {myRequest.map((req) => {
                return (
                  <Table.Row
                    key={req._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800 font-semibold"
                  >
                    <Table.Cell className="whitespace-nowrap text-gray-900 font-semibold dark:text-white">
                      {req.reqName}
                    </Table.Cell>

                    <Table.Cell>{req.reqBiodataId}</Table.Cell>
                    <Table.Cell> {req.contactStatus}</Table.Cell>
                    <Table.Cell>
                      {" "}
                      {req.contactStatus === "pending"
                        ? req.contactStatus
                        : req.reqPhone}
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      {req.contactStatus === "pending"
                        ? req.contactStatus
                        : req.reqEmail}
                    </Table.Cell>

                    <Table.Cell>
                      <Button
                        onClick={() => handleDelete(req._id)}
                        gradientMonochrome="failure"
                        className="font-semibold"
                      >
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ContactRequest;
