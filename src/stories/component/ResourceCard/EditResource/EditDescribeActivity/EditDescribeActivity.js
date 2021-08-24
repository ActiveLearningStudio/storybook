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
        path="\src\components\ResourceCard\EditResource\ResourceDescribeActivity.js"
        description="In order to edit the description of a resource activity, this component 
        will be more helpful. Through this component, you can easily edit the description of the
         resource activity. When you click on edit activity then a form will be opened with data 
         related to the respective activity. You can edit this form to update the data of the 
         respective activity. You can change the title, subject,  education level, and thumbnail 
         of the resource activity. After filling this form you will see a save button at the end
          of the form. Click that button to save your changes."
        codeSnippet={CodeSnippet}
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
        examples="https://dev.currikistudio.org/org/currikistudio/project/3501/playlist/9280/activity/41679/edit"
      />
    </>
  );
};
