import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
import { StoreSnippet } from "./storeSnippet";
export const Admin = () => {
  return (
    <>
      <Tabview
        componentName="Admin"
        path="\src\store\actions\admin.js"
        description="The action components for the admin module are present in this file. 
        All these actions will import into the reducer component of the admin module. 
        In some components, the API will be called and then the component will send API 
         response data to the reducer component as a payload.
         Then reducer component of the admin module will change states according to the payload."
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "www.google.com" },
        ]}
        reduxStore={[{ path: "/src/store/index", pathCode: StoreSnippet }]}
        apiUsed={[{ path: "/src/services/admin.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
