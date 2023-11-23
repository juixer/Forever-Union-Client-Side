import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const user = true;
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="https://i.ibb.co/hdf5r6s/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
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
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Button gradientMonochrome="cyan" className="text-black font-bold">Log In</Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink className="text-lg" to={"/"}>
          Home
        </NavLink>
        <NavLink className="text-lg" to={"/bioDatas"}>
          BioDatas
        </NavLink>
        <NavLink className="text-lg" to={"/aboutUs"}>
          About Us
        </NavLink>
        <NavLink className="text-lg" to={"/contactUs"}>
          Contact Us
        </NavLink>
        {user && (
          <NavLink className="text-lg" to={"/dashboard"}>
            DashBoard
          </NavLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
