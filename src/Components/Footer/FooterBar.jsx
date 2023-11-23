import { Footer } from "flowbite-react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaSquareXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const FooterBar = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="max-w-screen-xl mx-auto justify-between space-y-3 sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center items-center flex-col">
            <img
              src="https://i.ibb.co/hdf5r6s/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Forever Union
            </span>
          </div>
          <div>
            <h1 className="text-lg font-semibold" to={"/"}>
              Follow Us
            </h1>
            <div className="flex justify-center items-center flex-wrap gap-3 text-xl">
              <FaFacebook />
              <FaInstagram />
              <FaSquareXTwitter />
              <FaTiktok />
              <FaSnapchat />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold" to={"/"}>
              Quick Links
            </h1>
            <div className="flex justify-center items-center flex-wrap gap-3">
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
            </div>
          </div>
        </div>
        <Footer.Divider />
        <p>Copyright © {year} - All right reserved by Forever Union Ltd</p>
      </div>
    </Footer>
  );
};

export default FooterBar;
