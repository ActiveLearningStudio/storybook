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
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={["axios", "swal", "laravel-echo"]}
        customHooks={[
          { name: "/src/store/actionTypes", url: "www.google.com" },
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
