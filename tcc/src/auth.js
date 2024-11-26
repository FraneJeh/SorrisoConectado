import { Children, createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ Children }) => {
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}