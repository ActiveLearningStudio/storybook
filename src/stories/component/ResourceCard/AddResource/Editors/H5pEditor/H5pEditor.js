import React from "react";
import { Tabview } from "../../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./H5PEditor.png";
import { ResourceStore } from "../../../ResourceStore.js";
import { Stylesheetused } from "../../../stylesheetUsed.js";
export const H5PEditor = () => {
  return (
    <>
      <Tabview
        componentName="H5PEditor"
        path="\src\components\ResourceCard\AddResource\Editors\H5PEditor.js"
        description="This is the component for loading an H5P editor in an iframe.
         Whenever you need to add some data through the H5P editor then you will load 
         the H5P editor in an iframe. In this way, you can update and show data through
          the H5p editor very easily."
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "react-fontawesome",
          "swal",
        ]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: ResourceStore },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/create"
      />
    </>
  );
};
