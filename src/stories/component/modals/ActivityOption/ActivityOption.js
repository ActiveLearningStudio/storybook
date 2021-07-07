import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./activityOption.png";
import { Stylesheetused } from "../stylesheetUsed.js";
export const ActivityOption = () => {
  return (
    <>
      <Tabview
        componentName="MyVerticallyCenteredModal"
        path="\src\components\models\activityOptions.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-bootstrap"]}
        customHooks={[
          {
            name: "/src/containers/H5PPreview",
            url: "www.google.com",
          },
        ]}
        reduxStore={[]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/create"
      />
    </>
  );
};
