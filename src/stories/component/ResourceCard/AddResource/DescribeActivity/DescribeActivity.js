import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./DescribeActivity.png";
import { ResourceStore } from "../../ResourceStore.js";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const DescribeActivity = () => {
  return (
    <>
      <Tabview
        componentName="ResourceDescribeActivity"
        path="\src\components\ResourceCard\AddResource\ResourceDescribeActivity.js"
        description="In this component, you will see a form describing the new activity.
        In this form, you will enter your activity title, subject, education level, and in the end,
         you will select the thumbnail of that activity. 
        After filling in these details you will see a  continue button to move to the next step."
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
            name: "/src/components/ResourceCard/fields/MetaTitleInputField",
            url: "www.google.com",
          },
          {
            name: "/src/components/models/pexels",
            url: "www.google.com",
          },
          {
            name: "/src/components/ResourceCard/AddResource/dropdownData",
            url: "www.google.com",
          },
          {
            name: "/src/components/ResourceCard/fields/MetaSubjectsField",
            url: "www.google.com",
          },
          {
            name:
              "/src/components/ResourceCard/fields/MetaEducationLevelInputField",
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
