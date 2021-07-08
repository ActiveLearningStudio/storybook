import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const OrgServices = () => {
  return (
    <>
      <Tabview
        componentName="OrganizationsServices"
        path="\src\services\organizations.services.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["config"]}
        customHooks={[
          {
            name: "/src/services/errors",
            url: "www.google.com",
          },
        ]}
        reduxStore={[]}
        apiUsed={[{ path: "/src/services/http.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
