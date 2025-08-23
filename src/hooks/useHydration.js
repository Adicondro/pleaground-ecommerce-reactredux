import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const dispatch = useDispatch();

  const hydrateAuth = async () => {
    try {
      const currentUser = localStorage.getItem("current-user");

      if (!currentUser) return;

      const userResponse = await axiosInstance.get("/users/" + currentUser);

      dispatch({
        type: "USER_LOGIN",
        payload: {
          username: userResponse.data.username,
          id: userResponse.data.id,
          role: userResponse.data.role,
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsHydrated(true);
    }
  };

  useEffect(() => {
    hydrateAuth();
  }, []);

  return {
    isHydrated,
  };
};

export default useHydration;
