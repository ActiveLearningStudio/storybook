import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./EducationLevel.png";
import { ResourceStore } from "../../ResourceStore.js";
import { Stylesheetused } from "../../stylesheetUsed.js";
export const MetaEducationLevel = () => {
  return (
    <>
      <Tabview
        componentName="MetaEducationLevelInputField"
        path="\src\components\ResourceCard\fields\MetaEducationLevelInputField.js"
        description="To show education level in the dropdown list this component will be used.
        Every time, when we will need an education level in resource activity form then we will 
        call this component to display the education level in the dropdown list. 
        Then you can select any education level from that list to use in the resource activity
         form. The dropdown list used in this component comes from the react widget library."
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
