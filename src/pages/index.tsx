import { useQuery } from "react-query";
import api from "../api";

const Index = () => {
  const { data, isSuccess } = useQuery([api.profile.get], api.profile.get, {
    initialData: null,
  });
  console.log(data);
  return <div>teste</div>;
};

export default Index;
