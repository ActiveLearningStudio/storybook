import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import ActivityWizardImg from "./ActivityWizard.png";
import { ActivityStore } from "../ActivityStore.js";
import { Stylesheetused } from "../stylesheetUsed.js";
export const ActivityWizard = () => {
  return (
    <>
      <Tabview
        componentName="ActivityWizard"
        path="\src\containers\CreateActivity\ActivityWizard.js"
        description="This is the component for the activity wizard. You will find the detail related to each step that is used for the creation of the activity
When you click on activity type then a panel will be opened where you will pick the activity type. When you click on the continue button, then you will pick any activity name from the panel and then
 the same like for other activity headings like activity description and activity build."
        codeSnippet={CodeSnippet}
        libraryUsed={["props-types", "react-redux", "react-router-dom", "swal"]}
        customHooks={[
          {
            name:
              "/src/components/ResourceCard/AddResource/ResourceActivityType",
            url: "www.google.com",
          },
          {
            name:
              "/src/components/ResourceCard/AddResource/ResourceSelectActivity",
            url: "www.google.com",
          },
          {
            name:
              "/src/components/ResourceCard/AddResource/ResourceDescribeActivity",
            url: "www.google.com",
          },
          {
            name:
              "/src/components/ResourceCard/AddResource/ResourceActivityBuild",
            url: "www.google.com",
          },
          {
            name: "/src/containers/CreateActivity/ActivityMeter",
            url: "www.google.com",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: ActivityStore },
        ]}
        apiUsed={[]}
        images={ActivityWizardImg}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/project/6031/playlist/12875/activity/create"
      />
    </>
  );
};
