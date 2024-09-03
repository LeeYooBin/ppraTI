import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          throw new Error("Token expired");
        }
        setUser(decoded);
      } catch (e) {
        console.error("Invalid Token: ", e);
        Cookies.remove("token");
      }
    }
  }, []);

  const login = (token) => {
    Cookies.set("token", token, { expires: 7 });
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return { user, login, logout };
};
