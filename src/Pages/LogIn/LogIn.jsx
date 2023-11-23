import { Button } from "flowbite-react";
import Container from "../../Shared/Container/Container";
import Headline from "../../Shared/Headline/Headline";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <Container>
      <div className="my-5 max-w-2xl mx-auto">
        <Headline text={"Log In"} />
        <div className="flex flex-col mt-10">
          <div className="w-full rounded-lg bg-gradient-to-r from-emerald-300 to-cyan-500">
            <form className="m-10 space-y-5">
              <div className="space-y-3">
                <h1 className="font-semibold text-2xl">Email</h1>
                <input
                  type="email"
                  className="w-full rounded-lg border-none "
                  placeholder="Please Type Your Email"
                />
              </div>

              <div className="space-y-3">
                <h1 className="font-semibold text-2xl">Password</h1>
                <input
                  type="password"
                  className="w-full rounded-lg border-none "
                  placeholder="Please Type Your Password"
                />
              </div>

              <input
                type="submit"
                value="Log In"
                className="cursor-pointer font-bold text-xl border-2 border-white w-full py-2 rounded-lg hover:bg-gradient-to-r from-lime-300 to-emerald-400 hover:border-transparent "
              />
            </form>
          </div>
          <div className="max-w-xs mx-auto space-y-5 my-5">
            <h1 className="text-center font-semibold text-4xl">OR</h1>
            <Button gradientMonochrome="lime" className="font-semibold w-full">
              <FaGoogle className="text-2xl" />{" "}
              <span className="ml-3 text-2xl">Log In With Google</span>
            </Button>
            <div>
              <Link to={"/register"}>
                <h1 className="text-2xl text-center underline cursor-pointer">
                  Create An Account
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LogIn;
