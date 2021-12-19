import http from "../http";

const home = {
  release: async () => {
    const { data: result, status } = await http.get("/browse/new-releases");

    if (status !== 200) {
      throw new Error((result as any).message);
    }
    return result.albums.items;
  },
};

export default home;
