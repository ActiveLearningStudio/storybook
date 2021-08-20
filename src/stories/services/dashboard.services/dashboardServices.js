import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const DashboardServices = () => {
  return (
    <>
      <Tabview
        componentName="DashboarServices"
        path="\src\services\dasboard.services.js"
        description="In dashboard services, you will get project data by calling two APIs named with getUserProject and getProject. After calling these APIs,
         you can use this data in a further area where you will need project details."
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
