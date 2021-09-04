import React from "react";
import { logoutUser } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "../../All.css"


const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.user.email);
  const logoutUserHandler = () => {
    dispatch(logoutUser());
    history.push("/signup");
  };
  return (
    <header>
      <p><b>{email}</b></p>
      <h3>Thinkwik</h3>
      <button onClick={logoutUserHandler}>Logout</button>
    </header>
  );
};

export default Header;
