import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
import { StoreSnippet } from "./storeSnippet";

export const Lms = () => {
  return (
    <>
      <Tabview
        componentName="GenericLms"
        path="\src\store\actions\LMS\genericLMS.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/genericLMSActionTypes", pathCode: StoreSnippet },
        ]}
        apiUsed={[
          { path: "/src/services/genericLMS.service", apicode: ApiCode },
        ]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
