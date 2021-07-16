import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import LoginImg from "./login.png";
import { Stylesheetused } from "../stylesheetUsed.js";
import { StoreSnippet } from "../Store.js";
export const Login = () => {
  return (
    <>
      <Tabview
        componentName="LoginPage"
        path="\src\containers\Auth\LoginPage.js"
        description="In the login module, you can log in to your curriki studio account. By filling the login form click on the login button and then you will be redirect to the curriki studio dashboard.
          If your credential is wrong then you will get an error message regarding your account. "
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "react-redux",
          "prop-types",
          "react-fontawesome",
          "react-router-dom",
          "validator",
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
        images={LoginImg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/login"
      />
    </>
  );
};
