import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import RegisterImg from "./register.png";
import { Stylesheetused } from "../stylesheetUsed.js";
import { StoreSnippet } from "../Store.js";
export const Register = () => {
  return (
    <>
      <Tabview
        componentName="RegisterPage"
        path="\src\containers\Auth\RegisterPage.js"
        description="This is the component of the register page. On this page, you can create your new curriki studio account. By clicking on the link to the register button, 
         you will see a signup form. Enter the account details which you want to set
          and then click on the signup button. In this way, you can create a new curriki studio account.
There is also another option for registering yourself, which is signup with a google login. 
In this link, you can also create your Curriki studio account with Gmail if you already sign in to your Gmail account"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "react-redux",
          "prop-types",
          "react-fontawesome",
          "react-router-dom",
          "validator",
          "swal",
          "query-string",
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
        images={RegisterImg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/register"
      />
    </>
  );
};
