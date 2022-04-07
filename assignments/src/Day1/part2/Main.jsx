import React from "react";
import ContactUs from "./ContactUs";
import Download from "./Download";
import Help from "./Help";
import Home from "./Home";
import JoinUs from "./JoinUs";
import Login from "./Login";
import Search from "./Search";
import Settings from "./Settings";

const Main = () => {
  return (
    <>
      <JoinUs />
      <Settings />
      <br />
      <Login />
      <ContactUs />
      <br />
      <Search />
      <Help />
      <br />
      <Home />
      <Download />
    </>
  );
};

export default Main;
