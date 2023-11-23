import Container from "../../Shared/Container/Container";
import Headline from "../../Shared/Headline/Headline";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <div className="my-5 max-w-2xl mx-auto">
        <Headline text={"Register Now"} />
        <div className="flex flex-col mt-10">
          <div className="w-full overflow-hidden rounded-lg bg-gradient-to-r from-emerald-300 to-cyan-500">
            <form className="m-10 space-y-5">
              <div className="space-y-3">
                <h1 className="font-semibold text-2xl">Name</h1>
                <input
                  type="text"
                  className="w-full rounded-lg border-none "
                  placeholder="Please Type Your Name"
                />
              </div>

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
              <div className="space-y-3">
                <h1 className="font-semibold text-2xl">Profile Picture</h1>
                <input type="file"/>
              </div>

              <input
                type="submit"
                value="Register Now"
                className="cursor-pointer font-bold text-xl border-2 border-white w-full py-2 rounded-lg hover:bg-gradient-to-r from-lime-300 to-emerald-400 hover:border-transparent "
              />
            </form>
          </div>
          <div className="max-w-xs mx-auto space-y-5 my-5">
            <h1 className="text-center font-semibold text-4xl">OR</h1>
            <div>
              <Link to={"/login"}>
                <h1 className="text-2xl text-center underline cursor-pointer">
                  Log In An Account
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
