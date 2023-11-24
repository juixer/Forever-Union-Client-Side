import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Nav = () => {
  const {user, userLogOut} = useAuth()

  const handleLogOut = () => {
    userLogOut()
    .then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logged out successfully",
        showConfirmButton: false,
        timer: 1500,
      });
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
  }

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img
          src="https://i.ibb.co/hdf5r6s/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-xl hidden lg:block font-semibold dark:text-white">
          Forever Union
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={user.photoURL}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.displayName} </span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to={'/login'}>
            <Button
              gradientMonochrome="lime"
              className="text-black font-bold mr-3"
            >
              Log In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link className="text-lg lg:font-semibold" to={"/"}>
          Home
        </Link>
        <NavLink className="text-lg lg:font-semibold" to={"/bioDatas"}>
          BioDatas
        </NavLink>
        <NavLink className="text-lg lg:font-semibold" to={"/aboutUs"}>
          About Us
        </NavLink>
        <NavLink className="text-lg lg:font-semibold" to={"/contactUs"}>
          Contact Us
        </NavLink>
        {user && (
          <NavLink className="text-lg lg:font-semibold" to={"/dashboard"}>
            DashBoard
          </NavLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
