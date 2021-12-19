import axios from "axios";

const auth = {
  login: async () => {
    const { data: result } = await axios.post("http://localhost:8888");

    return result;
  },
};

export default auth;
