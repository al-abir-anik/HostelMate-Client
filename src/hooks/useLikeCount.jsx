import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./Axios/useAxiosSecure";

const useLikeCount = () => {
  const axiosSecure = useAxiosSecure();

  const { data: like = [] } = useQuery({
    queryKey: ["like"],
    queryFn: async () => {
      const res = await axiosSecure.get("like");
      return res.data;
    },
  });

  return [like];
};

export default useLikeCount;
