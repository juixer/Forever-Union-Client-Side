import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";

const Root = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-3">
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Root;