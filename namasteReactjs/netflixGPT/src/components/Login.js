import { useRef, useState } from "react";
import { netflix_login_bg_img } from "../utils/url";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      !isSignIn && name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            
          })
            .then( () =>
            {
              const { uid, email, displayName } = auth.currentUser;
                      dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                        })
                      );
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode + "-" + errorMessage);
              setErrorMessage(errorCode + "-" + errorMessage);
            });

          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log( user );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const logStatus = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      <div className="absolute inset-0 -z-10">
        <img
          src={netflix_login_bg_img}
          className="w-full h-full object-cover"
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-105 p-10 bg-black opacity-80 text-white rounded-md"
        >
          <h1 className="text-3xl font-semibold mb-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <div className="flex flex-col space-y-4">
            {!isSignIn && (
              <input
                ref={name}
                type="name"
                placeholder="Name"
                className="w-full p-3 border border-gray-500 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-500 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-500 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            onClick={handleButtonClick}
            className="w-full mt-6 px-3 py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-md font-semibold"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-red-700 font-bold my-9">{errorMessage}</p>
          <p onClick={logStatus} className="mt-9 cursor-pointer">
            {isSignIn
              ? "New to Netflix? Sign up now."
              : "Already a member? Sign in now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
