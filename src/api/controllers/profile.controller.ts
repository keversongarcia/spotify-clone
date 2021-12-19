import http from "../http";

interface ProfileProps {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: Array<{
    height: number;
    url: string;
    width: string;
  }>;
  type: string;
  uri: string;
}

const profile = {
  get: async () => {
    const { data } = await http.get<ProfileProps>("/me");
  },
};

export default profile;
