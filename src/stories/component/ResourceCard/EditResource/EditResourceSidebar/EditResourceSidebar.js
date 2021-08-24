import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./EditSidebar.png";
import { ResourceStore } from "../../ResourceStore.js";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const ResourceSidbar = () => {
  return (
    <>
      <Tabview
        componentName="EditResourceSidebar"
        path="\src\components\ResourceCard\EditResource\EditResourceSidebar.js"
        description="This component is used to create an activity sidebar with two to three 
        links for updating resource activity. The links are created through div and span tag 
        which will be displayed as the top navbar of the edit activity form. So these links will
         be used to switch to describe activity and activity build form."
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "classnames",
        ]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: ResourceStore },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/project/3501/playlist/9280/activity/41679/edit"
      />
    </>
  );
};
