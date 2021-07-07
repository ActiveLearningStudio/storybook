import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { Stylesheetused } from "./stylesheetUsed";
import Screenshot from "./ActivityCard.png";
export const ActivityCard = () => {
  return (
    <>
      <Tabview
        componentName="ActivityCard"
        path="\src\components\ActivityCard\index.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-router-dom", "react-redux"]}
        customHooks={[
          {
            name: "/src/components/ResourceCard/ResourceCardDropdown",
            url: "www.google.com",
          },
        ]}
        reduxStore={[]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/preview"
      />
    </>
  );
};
