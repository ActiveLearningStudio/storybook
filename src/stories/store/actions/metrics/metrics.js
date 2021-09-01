import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";

export const Metrics = () => {
  return (
    <>
      <Tabview
        componentName="Metrics"
        path="\src\store\actions\metrics.js"
        description="In this, action components related to the metrics module are present. 
        To change the log of activity, log of project and playlist, all these action components will be called respectively. All components will fetch data through 
        API and then will send it to the reducer component through the dispatch function."
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "?path=/story/store-actiontypes--component" },
        ]}
        reduxStore={[]}
        apiUsed={[{ path: "/src/services/metrics.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
