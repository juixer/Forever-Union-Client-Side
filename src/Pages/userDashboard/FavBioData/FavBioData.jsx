import { useQuery } from "@tanstack/react-query";
import Headline from "../../../Shared/Headline/Headline";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { HashLoader } from "react-spinners";
import { Button, Table } from "flowbite-react";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const FavBioData = () => {
  const { user } = useAuth();
  const {
    isPending,
    error,
    refetch,
    data: FavBio = [],
  } = useQuery({
    queryKey: ["FavBio"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/favorite/${user.email}`);
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

  const handleFavDelete = (id) => {
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
        axiosSecure.delete(`/favorite/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "BioData deleted From Favorites!",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="my-5 max-w-3xl mx-auto">
      <Headline text={"Your Favorites BioData"} />
      {FavBio.length === 0 ? (
        <>
          <h1 className="text-2xl text-center font-semibold mt-10">
          Your favorites list is empty! <br/> Start adding your favorite BioData.
          </h1>
        </>
      ) : (
        <div className="overflow-x-auto my-10 shadow-xl">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>BioData ID</Table.HeadCell>
              <Table.HeadCell>Permanent Address</Table.HeadCell>
              <Table.HeadCell>Occupation</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {FavBio.map((fav) => {
                return (
                  <Table.Row
                    key={fav._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800 font-semibold"
                  >
                    <Table.Cell className="whitespace-nowrap text-gray-900 font-semibold dark:text-white">
                      {fav.name}
                    </Table.Cell>
                    <Table.Cell>{fav.biodataId}</Table.Cell>
                    <Table.Cell>{fav.permanentDivision}</Table.Cell>
                    <Table.Cell>{fav.occupation}</Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => handleFavDelete(fav._id)}
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

export default FavBioData;
