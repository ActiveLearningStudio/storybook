import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "../storeSnippet";

export const Project = () => {
  return (
    <>
      <Tabview
        componentName="Project"
        path="\src\store\reducers\project.js"
        description="This component will change the states for the project module.
         Whenever. user will perform any action in the project module to change the state, 
        then this component will perform that action by filtering through the switch statement."
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[
          {
            name: "/src/logic/lmsCourse",
            url: "www.google.com",
          },
        ]}
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
