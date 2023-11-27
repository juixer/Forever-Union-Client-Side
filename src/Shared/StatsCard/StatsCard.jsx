const StatsCard = ({img, count, title}) => {
    return (
        <div data-aos="fade-left" className="h-64 w-64 bg-black bg-opacity-50 text-white  rounded-lg border-b-8 border-lime-400 flex flex-col justify-center items-center">
            <img src={img} className="w-36" />
            <h1 className="text-5xl font-bold animate-pulse delay-500">{count}</h1>
            <p className="font-semibold text-xl">{title}</p>
        </div>
    );
};

export default StatsCard;