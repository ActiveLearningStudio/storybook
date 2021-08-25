import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "../storeSnippet";

export const Share = () => {
  return (
    <>
      <Tabview
        componentName="Share"
        path="\src\store\reducers\share.js"
        description="For changing the states of sharing resources, this component is used. 
        For example to change the states of google share or change the state for courses. 
        This reducer component will perform an action according to the switch case match 
        to the action type."
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
