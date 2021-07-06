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
        description="This is the Description of Compoennt"
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
