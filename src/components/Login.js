import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [signin, setSignin] = useState();
  const [errormessage, setErrormessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrormessage(message);

    if (message) return;

    if (!signin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + " " + errorMessage);
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
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(
            `Error code: ${errorCode}, Error message: ${errorMessage}`
          );
        });
    }
  };

  const toggleSignInForm = () => {
    setSignin(!signin);
  };

  return (
    <>
      <Header />

      <div className="absolute">
        <img
          src="https://www.pcworld.com/wp-content/uploads/2024/04/Netflix-Hintergrund.jpg?quality=50&strip=all"
          alt="bg-img"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white opacity-90 rounded-lg "
      >
        <h1 className="font-bold text-3xl p-2">
          {" "}
          {signin ? "Sign In" : "Sign Up"}{" "}
        </h1>

        {!signin && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <p className="text-red-700 font-bold text-lg py-4"> {errormessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSubmit}
        >
          {" "}
          {signin ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="py-4 cursor-pointer hover" onClick={toggleSignInForm}>
          {" "}
          {signin
            ? " New to Netflix? SignUp Now"
            : "Already a registered? SignIn Now"}{" "}
        </p>
      </form>
    </>
  );
};

export default Login;
