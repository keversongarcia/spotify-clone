import { createContext } from "react";
import { checkCookies } from "cookies-next";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };
