import Headline from "../../../../Shared/Headline/Headline";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegStar, FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Rating from "react-rating";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import { HashLoader } from "react-spinners";

const SuccessStory = () => {
  const {
    isPending,
    error,
    data: successStory = [],
  } = useQuery({
    queryKey: ["successStory"],
    queryFn: async () => {
      const res = await axiosPublic.get("/getSuccessStory");
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center py-44">
        <HashLoader color="#7ad737" />
      </div>
    );
  }
  if (error) {
    return console.log(error.message);
  }
  return (
    <div className="my-16">
      <Headline text={"Successful Love Stories"} />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper my-10 text-center"
      >
        {successStory.map((story) => {
          return (
            <SwiperSlide key={story._id}>
              <div className="rounded-xl mb-10 overflow-hidden flex flex-col gap-2 justify-center items-center">
                <img
                  src={story.image}
                  className="w-56 full_round"
                />
                <Rating
                  className="text-orange-400"
                  placeholderRating={story.rating}
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar />}
                  fullSymbol={<FaStar />}
                />
                <h1 className="font-bold text-xl">{story.marriageDate}</h1>
                <p className="max-w-lg mx-auto font-semibold">
                 {story.story}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SuccessStory;
