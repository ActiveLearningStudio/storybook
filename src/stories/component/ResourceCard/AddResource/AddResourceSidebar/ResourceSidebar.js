import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./ActivitySidbar.png";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const ResourceSidbar = () => {
  return (
    <>
      <Tabview
        componentName="AddResourceSidebar"
        path="\src\components\ResourceCard\AddResource\AddResourceSidebar.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "classnames",
        ]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/create"
      />
    </>
  );
};
