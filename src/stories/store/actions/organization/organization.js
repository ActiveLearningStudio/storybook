import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";

export const Organization = () => {
  return (
    <>
      <Tabview
        componentName="Organization"
        path="\src\store\actions\organization.js"
        description="To change the state of the organization module,
         action components present in this file will be used. Get organization action is used 
         to get organization data. To set active organization, set active Org action will be used. 
         In this way, all other 
        components are used to perform different actions for the organization module."
        codeSnippet={CodeSnippet}
        libraryUsed={["swal"]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "www.google.com" },
        ]}
        reduxStore={[]}
        apiUsed={[
          { path: "/src/services/organization.service", apicode: ApiCode },
        ]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
