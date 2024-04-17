// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };

  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // const logGoogleRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   //console.log(response);
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };
  return (
    <div>
      <h1>Sign In page </h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>

      {/* <button onClick={signInWithGoogleRedirect}>
        sign in with google redirect
      </button> */}
    </div>
  );
};
export default SignIn;
