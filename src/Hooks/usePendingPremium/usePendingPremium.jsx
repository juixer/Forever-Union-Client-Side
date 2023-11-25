import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../useAxiosSecure/useAxiosSecure";

const usePendingPremium = () => {
  const {
    isPending,
    error,
    refetch,
    data: pendingReq = [],
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/pending");
      return res.data;
    },
  });
  return { isPending, refetch, error, pendingReq };
};

export default usePendingPremium;
