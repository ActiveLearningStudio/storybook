import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";

import { StoreSnippet } from "./StoreSnippet";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="ResourcePreview"
        path="\src\containers\Preview\ResourcePreview\index.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "react-redux",
          "react-router-dom",
          "prop-types",
          "react-fontawesome",
        ]}
        customHooks={[
          {
            name: "/src/containers/H5PPreview",
            url: "www.google.com",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples="https://dev.currikistudio.org/org/currikistudio"
      />
    </>
  );
};
