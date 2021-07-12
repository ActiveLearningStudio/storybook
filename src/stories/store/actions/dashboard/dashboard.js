import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const Dashboard = () => {
  return (
    <>
      <Tabview
        componentName="Dashboard"
        path="\src\store\actions\dashboard.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "www.google.com" },
        ]}
        reduxStore={[]}
        apiUsed={[
          { path: "/src/services/dashboard.service", apicode: ApiCode },
        ]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
