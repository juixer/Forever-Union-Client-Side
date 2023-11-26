import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../useAxiosPublic/useAxiosPublic";

const useStats = () => {

    const {data : stats = {} } = useQuery({
        queryKey: ['stats'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/getStats')
            return res.data
        }
      })

    return {stats}
};

export default useStats;