import Lottie from "lottie-react";
import Headline from "../../../Shared/Headline/Headline";
import dashBoardAni from '../../../../public/dashboard.json'

const DashHome = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <Headline text={`Welcome To Dashboard`}/>
            <Lottie animationData={dashBoardAni} loop={true} />
        </div>
    );
};

export default DashHome;