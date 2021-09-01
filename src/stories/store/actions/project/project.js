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
        description="To update the state of the project module, these actions components
         will be used to send payload data and type of action. The actions related to the project module are as: create the project,
         upload project thumbnail, project preview, 
         and other many more. So all these actions are used to update the state of the project module"
        codeSnippet={CodeSnippet}
        libraryUsed={["swal", "axios", "laravel-echo"]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "?path=/story/store-actiontypes--component" },
          {
            name: "/src/component/SharePreviewPopup/index",
            url: "",
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
