import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";

export const GenericLms = () => {
  return (
    <>
      <Tabview
        componentName="genericLMSActionTypes"
        path="\src\store\genericLMSActionTypes.js"
        description="This is not the component 
        but components related to  Generic LMS Setting will be exported here in this file."
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
