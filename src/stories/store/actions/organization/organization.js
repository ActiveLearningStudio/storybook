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
        description="This is the Description of Compoennt"
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
