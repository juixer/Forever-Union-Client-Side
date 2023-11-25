import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../useAxiosPublic/useAxiosPublic";
import useAuth from "../useAuth/useAuth";

const usePremium = () => {
  const { user } = useAuth();
  const { data: isPremium } = useQuery({
    queryKey: ["isPremium"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/isPremium/${user.email}`);
      return res.data;
    },
  });
  return {isPremium};
};

export default usePremium;
