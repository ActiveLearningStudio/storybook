import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const Resource = () => {
  return (
    <>
      <Tabview
        componentName="Resource"
        path="\src\store\actions\resource.js"
        description="All the actions related to resource activity will be used here. 
        Mostly used actions are loaded resource activity, create activity, and edit activity.
         These actions will call the API
         for getting data and then use that as a payload to send to the reducer component."
        codeSnippet={CodeSnippet}
        libraryUsed={["swal", "axios", "laravel-echo"]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "www.google.com" },
        ]}
        reduxStore={[]}
        apiUsed={[{ path: "/src/services/resource.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
