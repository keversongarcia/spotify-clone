import { createContext } from "react";
import { checkCookies, getCookie } from "cookies-next";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const token = getCookie("token", {
    domain: "localhost",
    path: "/",
  });
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };
