// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   // signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";
import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
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

  // const logGoogleRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   //console.log(response);
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };
  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        sign in with google redirect
      </button> */}

      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
