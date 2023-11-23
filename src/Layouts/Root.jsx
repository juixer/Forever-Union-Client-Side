import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import FooterBar from "../Components/Footer/FooterBar";

const Root = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-3">
        <Nav />
        <Outlet />
      </div>
      <FooterBar />
    </>
  );
};

export default Root;
