import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: "https://forever-union-server.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { userLogOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        const status = error.response.status;
        console.log(status);
        if (status === 401 || status === 403) {
          userLogOut().then(() => {
            navigate("/login");
          });
        }
      }
    );
  }, [navigate, userLogOut]);
  return axiosSecure;
};

export default useAxiosSecure;
