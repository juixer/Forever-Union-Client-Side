import Lottie from "lottie-react";
import Headline from "../../../Shared/Headline/Headline";
import dashBoardAni from '../../../assets/dashboard.json'
import useAuth from "../../../Hooks/useAuth/useAuth";
import HelmetElement from "../../../Shared/HelmetElement/HelmetElement";

const DashHome = () => {
    const {user} = useAuth()
    return (
        <div className="max-w-3xl mx-auto">
            <HelmetElement text={'Dashboard'}/>
            <Headline text={`Welcome Back, ${user?.displayName}`}/>
            <Lottie animationData={dashBoardAni} loop={true} />
        </div>
    );
};

export default DashHome;