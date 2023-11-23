import Headline from "../../../../Shared/Headline/Headline";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegStar, FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Rating from "react-rating";

const SuccessStory = () => {
  return (
    <div className="my-16">
      <Headline text={"Successful Love Stories"} />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10 text-center"
      >
        <SwiperSlide>
          <div className="rounded-xl mb-10 overflow-hidden flex flex-col gap-2 justify-center items-center">
            <img
              src="https://i.ibb.co/44t3Vy0/couple-1.png"
              className="w-56 full_round"
            />
            <Rating
            className="text-orange-400"
              placeholderRating={3.5}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
            <h1 className="font-bold text-xl">10-10-2024</h1>
            <p className="max-w-lg mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              dolorem dolor voluptas accusamus minima rerum, quod at neque
              eveniet incidunt fugiat cumque, aut ipsum mollitia quibusdam.
              Natus recusandae, id tempora quidem facilis saepe sint aperiam?
              Deserunt quaerat corrupti laboriosam, sapiente praesentium nemo ex
              adipisci. Quaerat earum commodi modi soluta quia. Ex velit
              inventore ipsam quis iure magni reprehenderit suscipit architecto.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden flex flex-col gap-2 justify-center items-center">
            <img
              src="https://i.ibb.co/44t3Vy0/couple-1.png"
              className="w-56 full_round"
            />
            <Rating
            className="text-orange-400"
              placeholderRating={3.5}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
            <h1 className="font-bold text-xl">10-10-2024</h1>
            <p className="max-w-lg mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              dolorem dolor voluptas accusamus minima rerum, quod at neque
              eveniet incidunt fugiat cumque, aut ipsum mollitia quibusdam.
              Natus recusandae, id tempora quidem facilis saepe sint aperiam?
              Deserunt quaerat corrupti laboriosam, sapiente praesentium nemo ex
              adipisci. Quaerat earum commodi modi soluta quia. Ex velit
              inventore ipsam quis iure magni reprehenderit suscipit architecto.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden flex flex-col gap-2 justify-center items-center">
            <img
              src="https://i.ibb.co/44t3Vy0/couple-1.png"
              className="w-56 full_round"
            />
            <Rating
            className="text-orange-400"
              placeholderRating={3.5}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
            <h1 className="font-bold text-xl">10-10-2024</h1>
            <p className="max-w-lg mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              dolorem dolor voluptas accusamus minima rerum, quod at neque
              eveniet incidunt fugiat cumque, aut ipsum mollitia quibusdam.
              Natus recusandae, id tempora quidem facilis saepe sint aperiam?
              Deserunt quaerat corrupti laboriosam, sapiente praesentium nemo ex
              adipisci. Quaerat earum commodi modi soluta quia. Ex velit
              inventore ipsam quis iure magni reprehenderit suscipit architecto.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SuccessStory;
