import http from "../http";

const player = {
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
  play: async () => {
    const { data: result, status } = await http.put("/me/player/play");

    if (status !== 204) {
      throw new Error((result as any).message);
    }
    return result;
  },
};

export default player;
