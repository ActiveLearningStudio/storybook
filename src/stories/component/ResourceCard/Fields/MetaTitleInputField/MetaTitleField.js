import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./TitleInput.png";
import { ResourceStore } from "../../ResourceStore.js";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const MetaTitleField = () => {
  return (
    <>
      <Tabview
        componentName="MetaTitleInputField"
        path="\src\components\ResourceCard\fields\MetaTitleInputField.js"
        description="This component is used to give the title of the resource activity. 
        Input field is taken which will use props data which is coming through this component.
        During the creation of new activity, 
        this component will be called to set the title of the resource activity."
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-redux"]}
        customHooks={[]}
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
