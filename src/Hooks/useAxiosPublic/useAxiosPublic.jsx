import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://forever-union-server.vercel.app",
  withCredentials: true,
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
