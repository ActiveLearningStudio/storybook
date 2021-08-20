import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const MatricServices = () => {
  return (
    <>
      <Tabview
        componentName="MatricsServices"
        path="\src\services\matrics.services.js"
        description="In this service module, there are a lot of APIs related to matrics data.
         When you will need activity view data then logActivityView will be called and when we will need playlist view data then playlistViewlog will be called as API.
         So in this way, there are other different APIs that are used in this module."
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
