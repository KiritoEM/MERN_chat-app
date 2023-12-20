import React, { ReactNode } from "react";
import { AuthProvider } from "@/hooks/useFirebase";
import RoutesHelper from "@/helper/AppRoutes";
import AppRoutes from "@/helper/AppRoutes";
import { TokenProvider } from "@/hooks/useToken";

interface Ichildren {
  children: ReactNode;
}

const Layout: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return (
    <AuthProvider>
      <TokenProvider>
        <AppRoutes>{children} </AppRoutes>
      </TokenProvider>
    </AuthProvider>
  );
};

export default Layout;
