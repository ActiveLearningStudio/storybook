import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "../storeSnippet";
export const Sidebar = () => {
  return (
    <>
      <Tabview
        componentName="Sidebar"
        path="\src\store\reducers\sidebar.js"
        description="This component is used to change the state for the sidebar. 
        For example, to load the sidebar isLoaded state will be used. while Projects,
         teams, and groups are the other states of this component that have a default 
         state as an empty array. When the projects and groups will be loaded then these
          states will be changed according to the action match in the switch statement."
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
