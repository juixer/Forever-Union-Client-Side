import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-5 relative rounded-xl">
      <img src="https://i.ibb.co/93MYpR0/banner.jpg" className="rounded-xl" />
      <div className="absolute top-0 text-white bg-black bg-opacity-50 h-full w-full rounded-xl">
        <div className="flex absolute md:top-[40%] top-0 lg:left-[20%] md:left-[5%] left-0 justify-center items-center flex-col md:gap-5 gap-2">
          <h1 className="lg:text-7xl md:text-5xl text-2xl text-center font-bold">
            Unveiling Paths to Forever
          </h1>
          <p className="md:text-xl text-base lg:text-2xl text-center">
            Join us in the pursuit of everlasting love. Your perfect match is
            just a click away.
          </p>
          <Link to={'/bioDatas'}>
            <Button gradientMonochrome="lime" className="animate-pulse font-bold text-black">
              Explore Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
