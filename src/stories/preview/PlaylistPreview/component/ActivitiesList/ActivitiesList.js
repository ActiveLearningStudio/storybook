import React from "react";
import { Tabview } from "../../../../../component/Tabview";
import { CodeSnippet } from "./code.js";

import Screenshot from "./ActivitiesList.png";
export const ActivitiesList = () => {
  return (
    <>
      <Tabview
        componentName="ActivitiesList"
        path="\src\containers\Preview\PlaylistPreview\component\ActivitiesList.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["prop-types"]}
        customHooks={[
          {
            name: "/src/components/ActivityPreviewCard/index",
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
