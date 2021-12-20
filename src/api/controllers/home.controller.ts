import http from "../http";

const home = {
  release: async () => {
    const { data: result, status } = await http.get("/browse/new-releases");

    if (status !== 200) {
      throw new Error((result as any).message);
    }
    return result.albums.items;
  },
  tracksMe: async () => {
    const { data: result, status } = await http.get(
      "/me/tracks?scope=user-library-read"
    );

    if (status !== 200) {
      throw new Error((result as any).message);
    }
    return result.albums.items;
  },
  playerCurrent: async () => {
    const { data: result, status } = await http.get("/me/player");

    if (status !== 200) {
      throw new Error((result as any).message);
    }
    return result;
  },
};

export default home;
