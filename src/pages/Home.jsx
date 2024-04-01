import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { changeTheme } = useContext(AppContext);

  return (
    <>
      <p className="text-3xl text-textColor">Home</p>
      <button onClick={changeTheme}>Change</button>
    </>
  );
};

export default Home;
