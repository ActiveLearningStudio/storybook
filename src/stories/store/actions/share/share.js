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
        description="This is the Description of Compoennt"
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
