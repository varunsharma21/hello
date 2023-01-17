import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../firebase";
import video from "../images/Meeting-11.gif";

function Login() {
  // const [{}, dispatch]= useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        //console.log(result.user);
        window.location.href = "/";
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="brand__name">Hello</h1>
        <h1 className="tagline">Collaborate Anywhere!</h1>
        <Button type="submit" className="login__button" onClick={signIn}>
          {" "}
          Sign In using Google{" "}
        </Button>
      </div>

      <img src={video} />
    </div>
  );
}

export default Login;
