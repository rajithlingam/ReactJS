import React from "react";
import { netflix_logo } from "../utils/url";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-black/90 to-black/10 px-4 py-3 z-10 flex justify-between items-center absolute top-0 left-0">
      <img className="w-32" src={netflix_logo} alt="Netflix Logo" />
    </div>
  );
};

export default Header;


// https://console.firebase.google.com/project/rlnetflixgpt/overview