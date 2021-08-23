import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./ActivitySidbar.png";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const ResourceSidbar = () => {
  return (
    <>
      <Tabview
        componentName="AddResourceSidebar"
        path="\src\components\ResourceCard\AddResource\AddResourceSidebar.js"
        description="This component is used to show the navbar which will show 
        on the top during the creation of new activity. There are four links in this navbar.
         whenever you will click on any activity creation step then the link related to the
          respective step will be active. 
        In this way, you will see the form below related to the active link."
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "classnames",
        ]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/create"
      />
    </>
  );
};
