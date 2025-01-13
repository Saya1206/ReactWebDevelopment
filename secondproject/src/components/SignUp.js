import React from "react";
import UserLogin from "./UserLogin";
import GuestLogin from "./GuestLogin";

/*
export default function SignUp({ isLogin }) {
  if (isLogin) {
    return <UserLogin />;
  }
  return <GuestLogin />;
}
  */

const SignUp = ({ isLogin }) => {
  return (
    <>
      { (isLogin) ? <UserLogin /> : <GuestLogin /> }
    </>
  );
};

export default SignUp;
