import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "../storeSnippet";

export const Metrics = () => {
  return (
    <>
      <Tabview
        componentName="Metrics"
        path="\src\store\reducers\metrics.js"
        description="This reducer component is used to update the state for project metrics.
        The component will save the state of project share, project count, and project views. 
         Whenever any actor will share or view the project then action related to the respective
          state will be triggered and update the state in the reducer component. In this way,
           all the states for metrics component for one user will update through this component"
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
