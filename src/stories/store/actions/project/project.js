import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
import { StoreSnippet } from "./storeSnippet";
export const Project = () => {
  return (
    <>
      <Tabview
        componentName="Project"
        path="\src\store\actions\project.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["swal", "axios", "laravel-echo"]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "www.google.com" },
          {
            name: "/src/cemnnoopst/SharePreviewPopup/index",
            url: "www.google.com",
          },
        ]}
        reduxStore={[{ path: "/src/store/index", pathCode: StoreSnippet }]}
        apiUsed={[{ path: "/src/services/project.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
