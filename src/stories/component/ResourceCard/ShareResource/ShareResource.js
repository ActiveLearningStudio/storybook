import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./ShareResource.png";
import { ResourceStore } from "./ResourceStore";
import { Stylesheetused } from "../stylesheetUsed.js";
export const ShareResource = () => {
  return (
    <>
      <Tabview
        componentName="ShareResource"
        path="\src\components\ResourceCard\ShareResource.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-fontawesome",
          "swal",
          "react-bootstrap",
          "react-confirm-alert",
        ]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: ResourceStore },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/project/3733/playlist/9795/activity/42789/preview"
      />
    </>
  );
};
