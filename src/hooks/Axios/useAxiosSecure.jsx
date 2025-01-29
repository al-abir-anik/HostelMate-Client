import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://hostel-mate-server-ten.vercel.app/",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
