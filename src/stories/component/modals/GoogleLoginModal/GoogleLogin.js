import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./googleLogin.png";
import { StoreSnippet } from "./StoreSnippet.js";
export const GoogleLogin = () => {
  return (
    <>
      <Tabview
        componentName="GoogleLoginModal"
        path="\src\components\models\GoogleLoginModal.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-bootstrap",
          "react-redux",
          "react-google-login",
          "react-router-dom",
          "formik",
        ]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actions/gapi", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed=""
        examples="https://dev.currikistudio.org/org/currikistudio"
      />
    </>
  );
};
