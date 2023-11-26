import { useQuery } from "@tanstack/react-query";
import useStats from "../../Hooks/useStats/useStats";
import Headline from "../../Shared/Headline/Headline";
import StatsCard from "../../Shared/StatsCard/StatsCard";
import { axiosSecure } from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { HashLoader } from "react-spinners";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
const AdminDashBoard = () => {
  const { stats } = useStats();
  const {
    isPending,
    error,
    data: adminStats = {},
  } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
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

  const pieData = [
    { name: "BioDatas", value: stats.totalBioData },
    { name: "Boys", value: stats.totalBoys },
    { name: "Girls", value: stats.totalGirls },
    { name: "Premium", value: adminStats.totalPremium },
    { name: "Revenue", value: adminStats.totalRevenues },
  ];

  //   custom pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#aa4bad"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${value}`}
      </text>
    );
  };

  return (
    <div className="my-5 max-w-4xl mx-auto">
      <Headline text={"Admin DashBoard"} />
      <div className="my-10 flex flex-row flex-wrap gap-10 justify-center items-center">
        <StatsCard
          img={"https://i.ibb.co/WFxQg62/group.png"}
          count={stats.totalBioData}
          title={"Total BioData"}
        />
        <StatsCard
          img={"https://i.ibb.co/hgpD8fc/male.png"}
          count={stats.totalBoys}
          title={"Total Boys"}
        />
        <StatsCard
          img={"https://i.ibb.co/cxgD3Mm/female.png"}
          count={stats.totalGirls}
          title={"Total Girls"}
        />

        <StatsCard
          img={"https://i.ibb.co/MBSwHMD/premium.png"}
          count={adminStats.totalPremium}
          title={"Total Premium"}
        />
        <StatsCard
          img={"https://i.ibb.co/ZVLCY7R/revenue.png"}
          count={adminStats.totalRevenues}
          title={"Total Revenue"}
        />
      </div>
      <div className="flex items-center justify-center overflow-x-scroll md:overflow-x-auto">
      <PieChart width={400} height={400} >
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default AdminDashBoard;
