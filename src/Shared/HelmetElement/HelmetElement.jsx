import { Helmet } from "react-helmet-async";

const HelmetElement = ({text}) => {
    return (
        <Helmet><title>Forever Union | {text}</title></Helmet>
    )
};

export default HelmetElement;