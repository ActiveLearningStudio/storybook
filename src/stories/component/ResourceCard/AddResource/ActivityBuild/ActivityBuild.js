import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ResourceStore } from "../../ResourceStore";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const Activitybuild = () => {
  return (
    <>
      <Tabview
        componentName="ResourceActivityBuild"
        path="\src\components\ResourceCard\AddResource\ResourceActivityBuild.js"
        description="This component is used to build activity. This is the last step to create your new atcivity. In this component,
         you just need to click on build activity to create your new activity."
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "react-fontawesome",
        ]}
        customHooks={[
          {
            name: "/src/utils/index",
            url: "www.google.com",
          },
          {
            name: "/src/components/ResourceCard/AddResource/Editors/TinyEditor",
            url: "www.google.com",
          },
          {
            name: "/src/components/ResourceCard/AddResource/Editors/H5PEditor",
            url: "www.google.com",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: ResourceStore },
        ]}
        apiUsed={[]}
        images=""
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/create"
      />
    </>
  );
};
