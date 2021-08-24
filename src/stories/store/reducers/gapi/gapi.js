import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "../storeSnippet";
export const Gapi = () => {
  return (
    <>
      <Tabview
        componentName="Gapi"
        path="\src\store\reducers\gapi.js"
        description="For updating states of Google login modal, this reducers component will be used.
         The component will accept an object of action and states which will update through this
          reducer. The component will match the action type and then update that state accordingly. 
          The states of the google login modal are as follows: get_student_course,get_student_auth,get_h5p_settings, etc."
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actionTypes", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
