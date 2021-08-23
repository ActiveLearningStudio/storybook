import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { Stylesheetused } from "./stylesheetUsed";
import Screenshot from "./ActivityPreviewCard.png";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="ActivityPreviewCard"
        path="\src\components\ActivityPreviewCard\index.js"
        description="In this component, you will see the preview of the activity in LTI. 
        All the data related to one activity will be display at one time in LTI and there 
        are options to move to the next and previous activity. In this way, you will be able 
        to see all activities related to the respective playlist in LTI Modal."
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-router-dom", "react-redux"]}
        customHooks={[
          {
            name: "/src/components/ResourceCard/dropdown",
            url: "www.google.com",
          },
        ]}
        reduxStore={[]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/47536/preview"
      />
    </>
  );
};
