import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import ForgetPasswordImg from "./ForgetPassword.png";
import { Stylesheetused } from "../stylesheetUsed.js";
import { StoreSnippet } from "../Store.js";
export const ForgetPassword = () => {
  return (
    <>
      <Tabview
        componentName="ForgetPasswordPage"
        path="\src\containers\Auth\ForgetPasswordPage.js"
        description="This is the description of Forget password component.
          In this component, you can reset your password if you have forgotten
           your password. In the login panel. you will see forget password link. 
           Click on the link, enter your email and click on send reset password link.
        After clicking on this, you will get a reset password link in your email.
          By clicking on the link in the email, update your password, and then log in again."
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "react-redux",
          "prop-types",
          "react-fontawesome",
          "react-router-dom",
          "validator",
          "swal",
        ]}
        customHooks={[
          { name: "/src/utils/index", url: "www.google.com" },
          { name: "/src/containers/Auth/Error", url: "www.google.com" },
          { name: "/src/containers/Auth/Logo", url: "www.google.com" },
        ]}
        reduxStore={[
          { path: "/src/store/actions/auth", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images={ForgetPasswordImg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/forgot-password"
      />
    </>
  );
};
