import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./prevLink.png";
export const PreviousLink = () => {
  return (
    <>
      <Tabview
        componentName="PreviousLink"
        path="\src\containers\Preview\PlaylistPreview\component\PreviousLink.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-router-dom",
          "react-fontawesome",
          "swal",
          "react-redux",
        ]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed=""
        examples="hhttps://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/47553/preview"
      />
    </>
  );
};
