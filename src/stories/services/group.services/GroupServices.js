import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const GroupServices = () => {
  return (
    <>
      <Tabview
        componentName="GroupServices"
        path="\src\services\group.services.js"
        description="These services will give us data that will be used in the group and organization of the project.
         You will get data of the organization, update, delete and remove sub org/group from your organization.
          Other APIs used in this service module are inviting members, remove members, add a project, remove projects, etc"
        codeSnippet={CodeSnippet}
        libraryUsed={["config"]}
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
