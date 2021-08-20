import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const CanvaServices = () => {
  return (
    <>
      <Tabview
        componentName="CanvasServices"
        path="\src\services\canvas.services.js"
        description="In this, you will call those APIs that are used to process the data for canvas. 
        Mostly used APIs in this service are  getH5PSettings and getLtiuUmmary."
        codeSnippet={CodeSnippet}
        libraryUsed={["axios", "config"]}
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
