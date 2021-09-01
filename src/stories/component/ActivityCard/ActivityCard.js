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
        description="This component is used to display the list of activities in the playlist module.
         In the list, you will see a card for every activity where you will see the title of the activity
          and one dropdown to perform quick action on the activity. Through these actions, you can remove, 
          preview, and edit activities attach to the playlist."
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-router-dom", "react-redux"]}
        customHooks={[
          {
            name: "/src/components/ResourceCard/ResourceCardDropdown",
            url: "?path=/story/component-resourcecard-resourcecarddropdown--component",
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
