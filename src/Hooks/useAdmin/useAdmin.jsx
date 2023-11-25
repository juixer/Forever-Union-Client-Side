import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isPending: isAdminPending, data: isAdmin } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(`/admin/${user.email}`);
        return res.data.admin;
      }
      return false;
    },
  });
  return { isAdmin, isAdminPending };
};

export default useAdmin;
