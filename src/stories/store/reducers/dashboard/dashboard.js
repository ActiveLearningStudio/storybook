import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "../storeSnippet";
export const Dashboard = () => {
  return (
    <>
      <Tabview
        componentName="Dashboard"
        path="\src\store\reducers\dashboard.js"
        description="In order to update the state of the dashboard module, 
        this component will be used. Default states are mentioned above in this component
         then these states will change through the action type used in the switch statement. 
         Any case in the switch statement, which will be matched then the reducer will
          update that states according to action match."
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
