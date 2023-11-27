import { Button } from "flowbite-react";
import Container from "../../Shared/Container/Container";
import Headline from "../../Shared/Headline/Headline";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { axiosPublic } from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useForm } from "react-hook-form";
import HelmetElement from "../../Shared/HelmetElement/HelmetElement";
import { motion } from "framer-motion";

const LogIn = () => {
  // auth Info
  const { googleLogin, logInUser } = useAuth();

  // navigation
  const navigate = useNavigate();
  const location = useLocation();

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    logInUser(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged In successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : "/");
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
  // handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result?.user;
        const userInfo = {
          name: user.displayName,
          email: user.email,
          role: "guest",
          status: "normal",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged In successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : "/");
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
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
        duration: 2,
      }}
    >
      <Container>
        <HelmetElement text={"Login"} />
        <div className="my-5 max-w-2xl mx-auto">
          <Headline text={"Log In"} />
          <div className="flex flex-col mt-10">
            <div className="w-full rounded-lg bg-gradient-to-r from-emerald-300 to-cyan-500">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="m-10 space-y-5"
              >
                <div className="space-y-3">
                  <h1 className="font-semibold text-2xl">Email</h1>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Please enter your email",
                    })}
                    className="w-full rounded-lg border-none "
                    placeholder="Please Type Your Email"
                  />
                  {errors.email && (
                    <span className="font-semibold text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <h1 className="font-semibold text-2xl">Password</h1>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Please enter your password",
                    })}
                    className="w-full rounded-lg border-none "
                    placeholder="Please Type Your Password"
                  />
                  {errors.password && (
                    <span className="font-semibold text-red-500">
                      {errors.password.message}
                    </span>
                  )}
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
              <Button
                onClick={handleGoogleLogin}
                gradientMonochrome="lime"
                className="font-semibold w-full"
              >
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
    </motion.div>
  );
};

export default LogIn;
