import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./SubjectDropdown.png";
import { ResourceStore } from "../../ResourceStore.js";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const MetaSubjectField = () => {
  return (
    <>
      <Tabview
        componentName="MetaSubjectsField"
        path="\src\components\ResourceCard\fields\MetaSubjectsField.js"
        description="This component is used to display the subject list during the
         creation of new activity. You will call this component whenever you will need the subject list in resource activity form. The dropdown list comes from the react widget library. 
        You will select any subject to fill the form for creating a new activity."
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types", "react-redux", "DropdownList"]}
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
