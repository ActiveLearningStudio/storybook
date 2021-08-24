import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";

export const ActionTypes = () => {
  return (
    <>
      <Tabview
        componentName="ActionTypes"
        path="\src\store\actionTypes.js"
        description="In this component, all the action components used in the actions folder are exported.
         In this way, you can use all the actions outside of this directory"
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
