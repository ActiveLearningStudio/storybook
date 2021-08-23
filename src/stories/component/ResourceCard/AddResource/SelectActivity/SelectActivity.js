import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./SelectActivity.png";
import { ResourceStore } from "../../ResourceStore.js";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const SelectActivity = () => {
  return (
    <>
      <Tabview
        componentName="ResourceSelectActivity"
        path="\src\components\ResourceCard\AddResource\ResourceSelectActivity.js"
        description="In this component, the resource activity navbar is imported and will
         display the navbar at the top. After this, you will see the list of activities and 
         a search option in the top right corner. You can also search for any activity there 
        and then pick your most favorite activity which you want to add to your project. "
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "redux-form",
          "react-fontawesome",
        ]}
        customHooks={[
          {
            name: "/src/utils/index",
            url: "www.google.com",
          },
          {
            name:
              "/src/components/ResourceCard/fields/ResourceActivityTypeField",
            url: "www.google.com",
          },
          {
            name: "/src/components/models/activityOptions",
            url: "www.google.com",
          },
        ]}
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
