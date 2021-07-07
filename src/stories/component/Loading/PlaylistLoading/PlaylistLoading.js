import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
//import Screenshot from "./ActivityCard.png";
export const PlaylistLoading = () => {
  return (
    <>
      <Tabview
        componentName="PlaylistsLoading"
        path="\src\components\Loading\PlaylistsLoading.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["lib/placeholders"]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples="https://dev.currikistudio.org/"
      />
    </>
  );
};
