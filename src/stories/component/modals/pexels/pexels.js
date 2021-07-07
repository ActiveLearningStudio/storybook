import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./pexels.png";
import { StoreSnippet } from "../StoreSnippet.js";
import { Stylesheetused } from "../stylesheetUsed.js";
export const Pexels = () => {
  return (
    <>
      <Tabview
        componentName="Pexels"
        path="\src\components\models\pexels.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-bootstrap",
          "react-redux",
          "react-fontawesome",
          "pexels-api-wrapper",
          "axios",
        ]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/create"
      />
    </>
  );
};
