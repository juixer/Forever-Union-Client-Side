import Lottie from "lottie-react";
import Headline from "../../../Shared/Headline/Headline";
import dashBoardAni from '../../../../public/dashboard.json'
import useAuth from "../../../Hooks/useAuth/useAuth";

const DashHome = () => {
    const {user} = useAuth()
    return (
        <div className="max-w-3xl mx-auto">
            <Headline text={`Welcome Back, ${user?.displayName}`}/>
            <Lottie animationData={dashBoardAni} loop={true} />
        </div>
    );
};

export default DashHome;