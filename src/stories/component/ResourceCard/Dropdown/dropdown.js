import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import Screenshot from "./Dropdown.png";
import { ResourceStore } from "../ResourceStore";
import { Stylesheetused } from "../stylesheetUsed.js";
export const Dropdown = () => {
  return (
    <>
      <Tabview
        componentName="ResourceCardDropdown"
        path="\src\components\ResourceCard\AddResource\dropdown.js"
        description="To create a dropdown against any resource activity this component will be used.
         Through this dropdown, you can perform different actions like preview, edit, delete and share, etc. So you can easily edit, delete and preview any resource through this component.
         The dropdown is created through react-bootstrap which is a library of react design-system."
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "prop-types",
          "react-redux",
          "react-router-dom",
          "react-fontawesome",
          "swal",
          "react-bootstrap",
        ]}
        customHooks={[
          {
            name: "/src/components/ResourceCard/shareResource",
            url: "?path=/story/component-resourcecard-shareresource--component",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: ResourceStore },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="https://dev.currikistudio.org/org/currikistudio/project/3733/playlist/9795/activity/42788/preview"
      />
    </>
  );
};
