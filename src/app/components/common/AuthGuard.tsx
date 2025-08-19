"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import Loader from "./Loader";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { token } = useAuth();
    const router = useRouter();
    const pathname: any = usePathname();
    const [stateReady, setStateReady] = useState(false);
    const publicPaths = ["/auth/login", "/auth/register"];

    useEffect(() => {
        setStateReady(true);

        if (!stateReady) return;

        const isPublicPath = publicPaths.includes(pathname);

        if (!token && !isPublicPath) {
            router.push("/auth/login");
        }

        if (token && isPublicPath) {
            router.push("/");
        }
    }, [token, pathname, stateReady]);

    if (
        typeof window !== "undefined" &&
        !token &&
        !localStorage.getItem("adminToken") &&
        !publicPaths.includes(pathname)
    ) {
        return <Loader />;
    }

    return <>{children}</>;
};

export default AuthGuard;