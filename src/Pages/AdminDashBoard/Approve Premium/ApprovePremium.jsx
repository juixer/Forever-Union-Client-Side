import { Button, Table } from "flowbite-react";
import Headline from "../../../Shared/Headline/Headline";
import usePendingPremium from "../../../Hooks/usePendingPremium/usePendingPremium";
import { HashLoader } from "react-spinners";
import { FaRegStar } from "react-icons/fa6";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import HelmetElement from "../../../Shared/HelmetElement/HelmetElement";

const ApprovePremium = () => {
  const { isPending, refetch, error, pendingReq } = usePendingPremium();
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

  const handleMakePremium = (req) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to make premium ${req.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/makePremium/${req.contactEmail}`)
          .then((res) => {
            if (
              res.data.bioDataResult.modifiedCount > 0 ||
              res.data.userResult.modifiedCount > 0
            ) {
              refetch();
              Swal.fire({
                title: "Successful!",
                text: `${req.name} is Premium now`,
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="my-5 max-w-4xl mx-auto">
      <HelmetElement text={'Premium Request'}/>
      <Headline text={"Premium Requests"} />
      {pendingReq === 0 ? (
        <h1 className="text-2xl text-center font-semibold mt-10">
          There is no Premium Pending Request Available!
        </h1>
      ) : (
        <div className="overflow-x-auto my-10 shadow-xl">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>BioData</Table.HeadCell>
              <Table.HeadCell>Make Premium</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {pendingReq.map((req) => {
                return (
                  <Table.Row
                    key={req._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800 font-semibold"
                  >
                    <Table.Cell className="whitespace-nowrap text-gray-900 font-semibold dark:text-white">
                      {req.name}
                    </Table.Cell>
                    <Table.Cell>{req.contactEmail}</Table.Cell>
                    <Table.Cell>{req.biodataId}</Table.Cell>
                    <Table.Cell>
                      {" "}
                      <Button
                        gradientDuoTone="purpleToBlue"
                        onClick={() => handleMakePremium(req)}
                      >
                        <FaRegStar />
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

export default ApprovePremium;
