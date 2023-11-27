import { useForm } from "react-hook-form";
import Container from "../../Shared/Container/Container";
import Headline from "../../Shared/Headline/Headline";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { axiosPublic } from "../../Hooks/useAxiosPublic/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";
import HelmetElement from "../../Shared/HelmetElement/HelmetElement";

const Register = () => {
  const navigate = useNavigate();
  // auth info
  const { createUser, updateUser } = useAuth();
  // react hook from
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const imgFile = { image: data.image[0] };
    const imgRes = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBBKEY}`,
      imgFile,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (imgRes.data.success) {
      const email = data.email;
      const password = data.password;
      const name = data.name;
      const image = imgRes.data.data.url;
      createUser(email, password)
        .then(() => {
          updateUser(name, image)
            .then(() => {
              const userInfo = {
                name,
                email,
                role: "guest",
                status: "normal",
              };
              axiosPublic.post("/users", userInfo);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            })
            .catch((err) => console.log(err.message));
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

    console.log(imgRes.data);
  };

  // Create an user

  return (
    <Container>
      <HelmetElement text={'Register'}/>
      <div className="my-5 max-w-2xl mx-auto">
        <Headline text={"Register Now"} />
        <div className="flex flex-col mt-10">
          <div className="w-full overflow-hidden rounded-lg bg-gradient-to-r from-emerald-300 to-cyan-500">
            <form onSubmit={handleSubmit(onSubmit)} className="m-10 space-y-5">
              <div className="space-y-3">
                <h1 className="font-semibold text-2xl">Name</h1>
                <input
                  type="text"
                  {...register("name", {
                    required: "Please Enter Your Name",
                  })}
                  className="w-full rounded-lg border-none "
                  placeholder="Please Type Your Name"
                />
                {errors.name && (
                  <span className="font-semibold text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <h1 className="font-semibold text-2xl">Email</h1>
                <input
                  type="email"
                  {...register("email", {
                    required: "Please Enter Your Email",
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
                    required: "Please Enter Your Password",
                    minLength: {
                      value: 6,
                      message: "Please Provide at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Please provide at most 20 characters",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      message:
                        "Password must be have at least uppercase, lowercase, digits, and special case letter",
                    },
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
              <div className="space-y-3">
                <h1 className="font-semibold text-2xl">Profile Picture</h1>
                <input
                  type="file"
                  {...register("image", {
                    required: "Please Provide a Profile Picture",
                  })}
                />
                {errors.image && (
                  <span className="font-semibold text-red-500">
                    {errors.image.message}
                  </span>
                )}
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
                  Already Have an Account?
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
