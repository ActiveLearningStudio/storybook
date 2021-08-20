import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const AdminServices = () => {
  return (
    <>
      <Tabview
        componentName="AdmintServices"
        path="\src\services\admin.services.js"
        description="In the admin.services component, you will call those APIs that will be used for admin purposes.
         The details which you will get will be used in the admin area."
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
