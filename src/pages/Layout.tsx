import React, { ReactNode } from "react";
import { AuthProvider } from "@/hooks/useFirebase";
import RoutesHelper from "@/helper/AppRoutes";
import AppRoutes from "@/helper/AppRoutes";
import { TokenProvider } from "@/hooks/useToken";
import { ChatProvider } from "@/hooks/useChat";

interface Ichildren {
  children: ReactNode;
}

const Layout: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return (
    <AuthProvider>
      <TokenProvider>
        <ChatProvider>
          <AppRoutes>{children} </AppRoutes>
        </ChatProvider>
      </TokenProvider>
    </AuthProvider>
  );
};

export default Layout;
