import { useForm } from "react-hook-form";
import Headline from "../../../Shared/Headline/Headline";
import axios from "axios";
import { axiosPublic } from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import HelmetElement from "../../../Shared/HelmetElement/HelmetElement";

const GotMarried = () => {
  const navigate = useNavigate();
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
      const successStory = {
        userId: data.userId,
        partnerId: data.partnerId,
        marriageDate: data.date,
        image: imgRes.data.data.url,
        rating: data.rating,
        story: data.story,
      };
      const storyRes = await axiosPublic.post("/successStory", successStory);
      if (storyRes.data.insertedId) {
        navigate('/dashboard/')
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thank You for Sharing Story with us!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };
  return (
    <div className="my-5 max-w-4xl mx-auto">
      <HelmetElement text={'Got Married'}/>
      <Headline text={"Join the Married Club"} />
      <div className="my-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full space-y-2">
              <h1 className="font-semibold text-xl">Your BioData ID</h1>
              <input
                type="number"
                className="rounded-lg w-full"
                placeholder="Enter Your BioData ID"
                {...register("userId", {
                  required: "Please Enter your BioData ID",
                })}
              />
              {errors.userId && (
                <span className="text-red-600 font-semibold">
                  {errors.userId.message}
                </span>
              )}
            </div>

            <div className="w-full space-y-2">
              <h1 className="font-semibold text-xl">Partner BioData ID</h1>
              <input
                type="number"
                className="rounded-lg w-full"
                placeholder="Enter Your Partner BioData ID"
                {...register("partnerId", {
                  required: "Please Enter Your Partner BioData ID",
                })}
              />
              {errors.partnerId && (
                <span className="text-red-600 font-semibold">
                  {errors.partnerId.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full space-y-2">
              <h1 className="font-semibold text-xl">Marriage Date</h1>
              <input
                type="date"
                className="rounded-lg w-full"
                {...register("date", {
                  required: "Please Provide Your Marriage Date",
                })}
              />
              {errors.date && (
                <span className="text-red-600 font-semibold">
                  {errors.date.message}
                </span>
              )}
            </div>

            <div className="w-full space-y-2">
              <h1 className="font-semibold text-xl">Picture with Partner</h1>
              <input
                type="file"
                className="rounded-lg w-full border border-black"
                {...register("image", {
                  required: "Share Picture with Your Partner",
                })}
              />
              {errors.image && (
                <span className="text-red-600 font-semibold">
                  {errors.image.message}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="font-semibold text-xl">Rating</h1>
            <div className="flex flex-col md:flex-row gap-5">
              <div>
                <label className="font-semibold">
                  <input
                    type="radio"
                    value="1"
                    className="mr-1"
                    {...register("rating", {
                      required: "Please Give us a Rating",
                    })}
                  />
                  1 Star
                </label>
              </div>
              <div>
                <label className="font-semibold">
                  <input
                    type="radio"
                    value="2"
                    className="mr-1"
                    {...register("rating", {
                      required: "Please Give us a Rating",
                    })}
                  />
                  2 Star
                </label>
              </div>
              <div>
                <label className="font-semibold">
                  <input
                    type="radio"
                    value="3"
                    className="mr-1"
                    {...register("rating", {
                      required: "Please Give us a Rating",
                    })}
                  />
                  3 Star
                </label>
              </div>
              <div>
                <label className="font-semibold">
                  <input
                    type="radio"
                    value="4"
                    className="mr-1"
                    {...register("rating", {
                      required: "Please Give us a Rating",
                    })}
                  />
                  4 Star
                </label>
              </div>
              <div>
                <label className="font-semibold">
                  <input
                    type="radio"
                    value="5"
                    className="mr-1"
                    {...register("rating", {
                      required: "Please Give us a Rating",
                    })}
                  />
                  5 Star
                </label>
              </div>
              {errors.rating && (
                <span className="text-red-600 font-semibold">
                  {errors.rating.message}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="font-semibold text-xl">Success Story</h1>
            <textarea
              className="w-full rounded-lg h-44"
              {...register("story", { required: "Share Your  Success Story" })}
            ></textarea>
            {errors.story && (
              <span className="text-red-600 font-semibold">
                {errors.story.message}
              </span>
            )}
          </div>

          <input
            type="submit"
            value="Submit"
            className="cursor-pointer font-bold text-xl w-full py-2 rounded-lg bg-gradient-to-r from-lime-300 to-emerald-400 mt-2"
          />
        </form>
      </div>
    </div>
  );
};

export default GotMarried;
