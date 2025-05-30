import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    localStorage.removeItem("user");
    navigate("/signout");
  }, [navigate]);

  return null;
};

export default SignOut;
