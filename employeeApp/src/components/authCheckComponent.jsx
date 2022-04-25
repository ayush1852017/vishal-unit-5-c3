import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const authCheckComponent = () => {
  const { isAuth } = useContext(AuthContext);

  return <div>authCheckComponent</div>;
};
