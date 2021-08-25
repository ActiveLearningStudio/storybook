import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const Share = () => {
  return (
    <>
      <Tabview
        componentName="Share"
        path="\src\store\actions\share.js"
        description="In order to share the project with someone, 
        this action component will be used. Basically, the component will copy the project id and 
        other necessary data through parameters. After this component will call the google classroom
         API to share data on that panel.
         In this way, this action will be used to share the project to google classroom."
        codeSnippet={CodeSnippet}
        libraryUsed={["swal"]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[{ path: "/src/services/search.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
