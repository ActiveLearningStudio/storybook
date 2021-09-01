import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";

export const Playlist = () => {
  return (
    <>
      <Tabview
        componentName="Playlist"
        path="\src\store\actions\playlist.js"
        description="These actions are used to change the state of the playlist module. 
        After getting data from API, each action component will dispatch a function for 
        the reducer component. This dispatch function has an object of response data of playlist and type of action.
         Then reducer component will process playlist data for changing state."
        codeSnippet={CodeSnippet}
        libraryUsed={["axios", "swal", "laravel-echo"]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "?path=/story/store-actiontypes--component" },
        ]}
        reduxStore={[]}
        apiUsed={[{ path: "/src/services/playlist.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
