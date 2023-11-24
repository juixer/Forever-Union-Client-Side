import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../useAxiosPublic/useAxiosPublic";

const usePremiumUser = () => {
    const { isPending, error, data: premiumUser = [] } = useQuery({
        queryKey: ['premiumUser'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/biodatas/premium')
            return res.data
        }
          
      })
    return {isPending, error,premiumUser}
    
};

export default usePremiumUser;