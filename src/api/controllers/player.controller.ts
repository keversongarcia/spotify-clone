import http from "../http";

interface PlayProps {
  context_uri: string;
  offset: {
    position: number;
  };
  position_ms: number;
}

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
  play: async (data: PlayProps) => {
    const { data: result, status } = await http.put("/me/player/play", data);

    if (status !== 204) {
      throw new Error((result as any).message);
    }
    return result;
  },
  favorite: async () => {
    const { data: result, status } = await http.put("/me/tracks");

    if (status !== 204) {
      throw new Error((result as any).message);
    }
    return result;
  },
};

export default player;
