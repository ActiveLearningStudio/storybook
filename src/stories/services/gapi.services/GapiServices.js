import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const GapiServices = () => {
  return (
    <>
      <Tabview
        componentName="gapiServices"
        path="\src\services\gapi.services.js"
        description="In Gapi services, you will find different APIs related to studentCourse,
         h5P Resource setting, etc. On the other hand, you will also see other APIs related to getOutcomeSummary and turnIn. 
        The response data will be used in courses used in the project."
        codeSnippet={CodeSnippet}
        libraryUsed={["config", "axios", "swal"]}
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
