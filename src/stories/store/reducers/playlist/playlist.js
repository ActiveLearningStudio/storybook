import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { StoreSnippet } from "../storeSnippet";

export const Playlist = () => {
  return (
    <>
      <Tabview
        componentName="Playlist"
        path="\src\store\reducers\playlist.js"
        description="This reducer component is used to change the state of the playlist module. 
        For example, to change the state for the selected playlist, loading H5p, is loading state for the playlist, etc.
         All these states are changed through the switch statement used in this component."
        codeSnippet={CodeSnippet}
        libraryUsed={[]}
        customHooks={[]}
        reduxStore={[
          { path: "/src/store/actionTypes", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
