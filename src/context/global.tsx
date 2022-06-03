import { createContext, useContext, useState } from "react";

import React from "react";

// const AuthContext = createContext('defaultValue');

interface IAuthContext {
  setTitlePage: string | any;
  titlePage: string | any;
  sidebarOpen: boolean;
  setSidebarOpen: React.FC | any;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const ContextGlobal = ({ children }: { children: any }) => {
  const [titlePage, setTitlePage] = useState<string | undefined>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  //funcao para login

  return (
    <AuthContext.Provider
      value={{
        setTitlePage,
        titlePage,
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
