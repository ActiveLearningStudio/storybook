import React from "react";
import { Tabview } from "../../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ResourceStore } from "../../../ResourceStore.js";
import { Stylesheetused } from "../../../stylesheetUsed.js";
export const TinyEditor = () => {
  return (
    <>
      <Tabview
        componentName="TinyEditor"
        path="\src\components\ResourceCard\AddResource\Editors\TinyEditor.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "tinymce-react",
        ]}
        customHooks={[]}
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
