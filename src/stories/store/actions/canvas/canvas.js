import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
import { StoreSnippet } from "./storeSnippet";
export const Canvas = () => {
  return (
    <>
      <Tabview
        componentName="Canvas"
        path="\src\store\actions\canvas.js"
        description="This file contains action components related to the canvas module.
         All these components will call API for canvas settings and data for the canvas module.
         Then each component will pass that data to the reducer component of the canvas module."
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "?path=/story/store-actiontypes--component" },
        ]}
        reduxStore={[]}
        apiUsed={[{ path: "/src/services/canvas.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
