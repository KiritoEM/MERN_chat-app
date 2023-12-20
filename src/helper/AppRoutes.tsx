import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useToken } from "@/hooks/useToken";

interface Ichildren {
  children: ReactNode;
}

let email: string | null;

const AppRoutes: React.FC<Ichildren> = ({ children }): JSX.Element => {
  const router = useRouter();
  const { getToken } = useToken();

  if (typeof window !== "undefined") {
    email = localStorage.getItem("userEmail");
  }

  useEffect(() => {
    if (
      !email &&
      !getToken() &&
      router.pathname !== "/" &&
      router.pathname !== "/inscription"
    ) {
      router.push("/");
    } else if ((email || getToken()) && router.pathname === "/") {
      router.push("/accueil");
    }
  }, [email, router.pathname]);

  return <>{children}</>;
};

export default AppRoutes;
