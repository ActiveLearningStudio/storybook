import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";

import Screenshot from "./Dropdown.png";
export const ActivitiesDropdown = () => {
  return (
    <>
      <Tabview
        componentName="ActivitiesDropdown"
        path="\src\containers\Preview\PlaylistPreview\component\ActivitiesDropdown.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types"]}
        customHooks={[
          {
            name: "components/ActivityPreviewCard/ActivityPreviewCardDropdown",
            url: "www.google.com",
          },
        ]}
        reduxStore={[]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed=""
        examples="hhttps://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/47553/preview"
      />
    </>
  );
};
