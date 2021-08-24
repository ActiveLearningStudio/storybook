import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./ShareLink.PNG";
import { ResourceStore } from "./ResourceStore";
import { Stylesheetused } from "../stylesheetUsed.js";
export const ShareLink = () => {
  return (
    <>
      <Tabview
        componentName="ShareLink"
        path="\src\components\ResourceCard\ShareLink.js"
        description="To publish any resource, a prompt box is used to confirming your publication.
         In this component, a sweet alert is used to confirm your publication.
          If you are configured to publish any resource then through this component
           you can publish any resource. Otherwise, you will see an alert message to configure your 
           resource from the admin side"
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-redux", "react-fontawesome", "swal"]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actions/project", pathCode: ResourceStore },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/project/3733/preview"
      />
    </>
  );
};
