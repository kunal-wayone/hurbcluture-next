"use client";

import { usePathname, useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Fetch } from "../hooks/apiutils";
import Loader from "../app/components/common/Loader";

interface AuthContextProps {
  user: any;
  token: string | null;
  login: (token: string, userData: object) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useRouter();
  const pathName = usePathname();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string | null>(null);
  console.log(pathName);
  useEffect(() => {
    navigate.prefetch("/");
  }, [navigate]);

  useEffect(() => {
    const fetchUser = async (sharedToken: string) => {
      try {
        const endpoint = "api/user/get-current-user";
        const response: { success: boolean; data: any; message: string } =
          await Fetch(endpoint, {}, 5000);
        if (response?.success && response?.data) {
          setLoading(false);
          setToken(sharedToken);
          setUser(response?.data);
          return navigate.replace(pathName);
        } else return navigate.replace("/login");
      } catch (error) {
        setLoading(false);
        console.log(error);
        localStorage.clear();
        return navigate.replace("/login");
      }
    };
    const sharedToken = localStorage.getItem("accessToken");
    if (sharedToken) fetchUser(sharedToken);
    else setLoading(false);
  }, [navigate]);

  const login = (token: string, userData: object) => {
    setToken(token);
    setUser(userData);
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userData", JSON.stringify(userData));
    return navigate.push("/");
  };

  const logout = () => {
    setToken(null);
    setUser({});
    localStorage.clear();
    return navigate.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
