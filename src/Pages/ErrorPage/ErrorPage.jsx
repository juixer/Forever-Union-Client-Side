import Lottie from "lottie-react";
import errAni from "../../assets/errorAni.json";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "flowbite-react";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";

const ErrorPage = () => {
  const err = useRouteError();
  const navigate = useNavigate();
  
    const handleBack = () => {
        navigate(-1)
    }
    const handleHome = () => {
        navigate('/')
    }

  return (
    <div className="flex flex-col justify-center items-center my-16 space-y-3">
      <Lottie animationData={errAni} loop={true} />
      <h1 className="font-semibold text-3xl">{err.statusText}</h1>
      <h1 className="font-semibold text-2xl">{err.error.message}</h1>
      <Button.Group outline>
        <Button onClick={handleBack} color="gray">
          <FaArrowLeft className="mr-2" /> Go Back
        </Button>
        <Button onClick={handleHome} color="gray">
          <FaHouse className="mr-2" /> Go Home
        </Button>
      </Button.Group>
    </div>
  );
};

export default ErrorPage;
