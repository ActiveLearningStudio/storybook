import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const Account = () => {
  return (
    <>
      <Tabview
        componentName="Account"
        path="\src\store\actions\account.js"
        description="In this component, the LMS setting service will be called. After this,
         the response of service and type of action will be dispatch for the reducer.
          Then reducer will use that action to change the state. "
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "?path=/story/store-actiontypes--component" },
        ]}
        reduxStore={[]}
        apiUsed={[{ path: "/src/services/account.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
