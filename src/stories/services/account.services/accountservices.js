import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const AccountServices = () => {
  return (
    <>
      <Tabview
        componentName="AccountServices"
        path="\src\services\account.services.js"
        description="This component is used for services where you will call API for getting account-related details.
         After calling this API you will get the User LMS setting which we will use when we needed."
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[{ path: "/src/services/http.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
