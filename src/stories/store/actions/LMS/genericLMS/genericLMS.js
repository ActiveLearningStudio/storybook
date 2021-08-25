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
        description="All the action components related to generic LMS are present in this file. 
        All these action components accept a parameter that will be used as a payload in the reducer
         component. In most cases services are called in action. If the response has some error then 
         the component will dispatch the error function. 
        Otherwise, the reducer will use this component to change the state."
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
