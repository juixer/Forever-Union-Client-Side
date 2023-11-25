import { Sidebar } from "flowbite-react";
import {
  FaChartSimple,
  FaClipboardCheck,
  FaClipboardList,
  FaCrown,
  FaHeart,
  FaHouse,
  FaPeopleGroup,
  FaPersonRunning,
  FaUserGroup,
} from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin/useAdmin";

const Dashboard = () => {
  // auth info
  const { userLogOut } = useAuth();
  //   navigate
  const navigate = useNavigate();
  // fake admin
  const {isAdmin} = useAdmin();

  // handle sign out
  const handleSignOut = () => {
    userLogOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-[15%]">
        <Sidebar className="w-full lg:w-fit border lg:fixed ">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="md:flex md:items-center md:overflow-x-scroll lg:overflow-hidden lg:block ove">
              {isAdmin ? (
                <>
                  <NavLink to={"/dashboard/adminDashboard"}>
                    <Sidebar.Item>
                      <h1 className="flex  items-center justify-start gap-3 text-xl font-semibold">
                        <FaChartSimple /> Dashboard
                      </h1>
                    </Sidebar.Item>
                  </NavLink>
                  <hr />
                  <NavLink to={"/dashboard/manage"}>
                    <Sidebar.Item>
                      <h1 className="flex  items-center justify-start gap-3 text-xl font-semibold">
                        <FaUserGroup /> Manage Users
                      </h1>
                    </Sidebar.Item>
                  </NavLink>
                  <hr />
                  <NavLink to={"/dashboard/approvePremium"}>
                    <Sidebar.Item>
                      <h1 className="flex  items-center justify-start gap-3 text-xl font-semibold">
                        <FaCrown /> Approve Premium
                      </h1>
                    </Sidebar.Item>
                  </NavLink>
                  <hr />
                  <NavLink to={"/dashboard/approveContact"}>
                    <Sidebar.Item>
                      <h1 className="flex  items-center justify-start gap-3 text-xl font-semibold">
                        <FaPeopleGroup /> Approve Contact Req
                      </h1>
                    </Sidebar.Item>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to={"/dashboard/editBioData"}>
                    <Sidebar.Item>
                      <h1 className="flex items-center justify-start gap-3 text-xl font-semibold">
                        <FaClipboardCheck /> Edit BioData
                      </h1>
                    </Sidebar.Item>
                  </NavLink>
                  <hr />
                  <NavLink to={"/dashboard/viewBioData"}>
                    <Sidebar.Item>
                      <h1 className="flex items-center justify-start gap-3 text-xl font-semibold">
                        <FaClipboardList /> View BioData
                      </h1>
                    </Sidebar.Item>
                  </NavLink>
                  <hr />
                  <NavLink to={"/dashboard/contactRequest"}>
                    <Sidebar.Item>
                      <h1 className="flex items-center justify-start gap-3 text-xl font-semibold">
                        <FaPeopleGroup />
                        Contact Requests
                      </h1>
                    </Sidebar.Item>
                  </NavLink>
                  <hr />
                  <NavLink to={"/dashboard/favoritesBiodata"}>
                    <Sidebar.Item>
                      <h1 className="flex items-center justify-start gap-3 text-xl font-semibold">
                        <FaHeart />
                        Favorites BioData
                      </h1>
                    </Sidebar.Item>
                  </NavLink>
                </>
              )}
              <hr />
              <NavLink onClick={handleSignOut}>
                <Sidebar.Item>
                  <h1 className="flex items-center justify-start gap-3 text-xl font-semibold">
                    <FaPersonRunning /> Log Out
                  </h1>
                </Sidebar.Item>
              </NavLink>

              <hr />
              <NavLink to={"/"}>
                <Sidebar.Item>
                  <h1 className="flex items-center justify-start gap-3 text-xl font-semibold">
                    <FaHouse /> Home
                  </h1>
                </Sidebar.Item>
              </NavLink>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="lg:w-[85%] w-full min-h-screen">
        <div className="m-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
