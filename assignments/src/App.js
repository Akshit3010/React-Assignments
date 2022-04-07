import "./App.css";
import ButtonProps from "./Day1/part2/ButtonProps";
// import Main from "./Day1/part2/Main";

function App() {
  return (
    <>
      {/* <Main /> */}
      <ButtonProps name="Join Us" bgcolor="#1F99CC" />
      <ButtonProps name="Settings" bgcolor="#709FA7" />
      <br />
      <ButtonProps name="Login" bgcolor="#F68E1C" />
      <ButtonProps name="Contact Us" bgcolor="#C22734" />
      <br />
      <ButtonProps name="Search" bgcolor="#80B23D" />
      <ButtonProps name="Help" bgcolor="#595592" />
      <br />
      <ButtonProps name="Home" bgcolor="#D63E7C" />
      <ButtonProps name="Download" bgcolor="#9E7A3E" />
    </>
  );
}

export default App;
