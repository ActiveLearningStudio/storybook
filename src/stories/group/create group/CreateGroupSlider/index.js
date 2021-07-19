import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { IndexSnippet } from "./code.js";
import GroupSlider from "./GroupSlider.png";
import { IndexStyle } from "./stylesheetUsed.js";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="Index"
        path="\src\containers\Groups\components\CreateGroupSlider\index.js"
        description="This component will be used for creating a slider of the group module.
          Group will be created in three steps, which you will see on the left-hand side during
           the creation of the group. In the slider component,
          you will see the title of each section which are used for the creation of the group."
        codeSnippet={IndexSnippet}
        libraryUsed={["prop-types", "classnames"]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images={GroupSlider}
        stylesheetUsed={IndexStyle}
        examples="https://dev.currikistudio.org/org/currikistudio/groups/create-group"
      />
    </>
  );
};
