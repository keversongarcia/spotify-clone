import { useSession } from "next-auth/react";
import { createContext } from "react";

interface AuthContextProps {
  token: string;
}

const AuthContext = createContext({} as AuthContextProps);

export const tokenStorage = "@spotify/token";

const AuthProvider = ({ children }) => {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  if (session) {
    localStorage.setItem(tokenStorage, token);
  }

  return (
    <AuthContext.Provider value={{ token: token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
