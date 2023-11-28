import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import FooterBar from "../Components/Footer/FooterBar";
import { HashLoader } from "react-spinners";
import Container from "../Shared/Container/Container";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-3">
        <Nav />
        {navigation.state === "loading" ? (
          <Container>
            <div className="flex justify-center items-center py-44">
              <HashLoader color="#7ad737" />
            </div>
          </Container>
        ) : (
          <Outlet />
        )}
      </div>
      <FooterBar />
    </>
  );
};

export default Root;
