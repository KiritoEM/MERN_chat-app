import React, { ReactNode } from "react";
import { AuthProvider } from "@/hooks/useFirebase";

interface Ichildren{
    children: ReactNode
}

const Layout : React.FC<Ichildren> = ({children})  :JSX.Element => {
    return (
        <AuthProvider>
          {children}    
        </AuthProvider>
    );
};

export default Layout;