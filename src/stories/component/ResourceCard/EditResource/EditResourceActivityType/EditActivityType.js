import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { TypeSnippet } from "./code.js";
import { ResourceStore } from "../../ResourceStore.js";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const ActivityType = () => {
  return (
    <>
      <Tabview
        componentName="ResourceActivityType"
        path="\src\components\ResourceCard\EditResource\ResourceActivityType.js"
        description="In this component, you can easily update the type of resource activity. 
        When you click on edit activity then you will see four steps to update your activity.
         In order to update the type of activity, click on the activity type link then the list
          of activity types will be opened and change the type of your activity from them.
           After this, you can click on the continue button to move next step.
            So in this component, you will see a search box and a small form for displaying 
            the type of activity."
        codeSnippet={TypeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "redux-form",
        ]}
        customHooks={[
          {
            name: "/src/utils/index",
            url: "www.google.com",
          },
          {
            name:
              "/src/components/ResourceCard/EditResource/EditResourceSidebar",
            url: "www.google.com",
          },
          {
            name:
              "/src/components/ResourceCard/fields/ResourceActivityTypeField",
            url: "www.google.com",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: ResourceStore },
        ]}
        apiUsed={[]}
        images=""
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/project/3501/playlist/9280/activity/41679/edit"
      />
    </>
  );
};
