import { Button, Table } from "flowbite-react";
import Headline from "../../../Shared/Headline/Headline";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { HashLoader } from "react-spinners";
import { FaRegStar, FaStar, FaUserCheck, FaUserPlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import HelmetElement from "../../../Shared/HelmetElement/HelmetElement";
import { motion } from "framer-motion";

const ManageUser = () => {
  const [searchText, setSearchText] = useState("");

  // Handle user name search
  const handleSearchData = (e) => {
    e.preventDefault();
    const search = e.target.value;
    setSearchText(search);
  };

  const {
    isPending,
    error,
    refetch,
    data: allUsers = [],
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?search=${searchText}`);
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [searchText, refetch]);

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

  //   handle Make admin
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to make admin ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/makeAdmin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Successful!",
              text: `${user.name} is admin now`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  //   handle remove Admin
  const handleRemoveAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove admin ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/removeAdmin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Successful!",
              text: `${user.name} is admin now`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  //   handle make premium
  const handleMakePremium = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to make premium ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/makePremium/${user.email}`).then((res) => {
          if (
            res.data.bioDataResult.modifiedCount > 0 ||
            res.data.userResult.modifiedCount > 0
          ) {
            refetch();
            Swal.fire({
              title: "Successful!",
              text: `${user.name} is Premium now`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  //   handle remove Premium

  const handleRemovePremium = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove Premium ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/removePremium/${user.email}`).then((res) => {
          if (
            res.data.bioDataResult.modifiedCount > 0 ||
            res.data.userResult.modifiedCount > 0
          ) {
            refetch();
            Swal.fire({
              title: "Successful!",
              text: `${user.name} is Normal user now`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <motion.div
      className="my-5 max-w-3xl mx-auto"
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
        duration: 2,
      }}
    >
      <HelmetElement text={"Manage Users"} />
      <Headline text={"Manage Users"} />
      <form className="my-5">
        <div className="flex justify-center items-center flex-col md:flex-row gap-5 mx-3">
          <input
            name="username"
            onChange={handleSearchData}
            type="text"
            className="md:w-3/4 w-full rounded-lg"
            placeholder="Search by User Name"
          />
          <input
            type="submit"
            value="Search"
            className="cursor-pointer font-bold text-xl  py-2 rounded-lg bg-gradient-to-r from-lime-300 to-emerald-400 md:w-1/4 w-3/4 "
          />
        </div>
      </form>
      <div className="overflow-x-auto my-10 shadow-xl">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>User Name</Table.HeadCell>
            <Table.HeadCell>User Email</Table.HeadCell>
            <Table.HeadCell>Make Admin</Table.HeadCell>
            <Table.HeadCell>Make Premium</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allUsers.map((user) => {
              return (
                <Table.Row
                  key={user._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 font-semibold"
                >
                  <Table.Cell className="whitespace-nowrap text-gray-900 font-semibold dark:text-white">
                    {user.name}
                  </Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    {user.email === "shantoking3@gmail.com" ||
                    user.email === "admin@forever.com" ? (
                      <>
                        {user.role === "admin" ? (
                          <Button gradientDuoTone="tealToLime" disabled>
                            <FaUserCheck />
                          </Button>
                        ) : (
                          <Button gradientDuoTone="purpleToBlue" disabled>
                            <FaUserPlus />
                          </Button>
                        )}
                      </>
                    ) : (
                      <>
                        {user.role === "admin" ? (
                          <Button
                            gradientDuoTone="tealToLime"
                            onClick={() => handleRemoveAdmin(user)}
                          >
                            <FaUserCheck />
                          </Button>
                        ) : (
                          <Button
                            onClick={() => handleMakeAdmin(user)}
                            gradientDuoTone="purpleToBlue"
                          >
                            <FaUserPlus />
                          </Button>
                        )}
                      </>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    {user.email === "shantoking3@gmail.com" ||
                    user.email === "admin@forever.com" ? (
                      <>
                        {user.status === "premium" ? (
                          <Button gradientDuoTone="tealToLime" disabled>
                            <FaStar />
                          </Button>
                        ) : (
                          <Button gradientDuoTone="purpleToBlue" disabled>
                            <FaRegStar />
                          </Button>
                        )}
                      </>
                    ) : (
                      <>
                        {user.status === "premium" ? (
                          <Button
                            gradientDuoTone="tealToLime"
                            onClick={() => handleRemovePremium(user)}
                          >
                            <FaStar />
                          </Button>
                        ) : (
                          <Button
                            gradientDuoTone="purpleToBlue"
                            onClick={() => handleMakePremium(user)}
                          >
                            <FaRegStar />
                          </Button>
                        )}
                      </>
                    )}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </motion.div>
  );
};

export default ManageUser;
