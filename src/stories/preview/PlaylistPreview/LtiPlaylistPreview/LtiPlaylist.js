import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { Stylesheetused } from "./stylesheetUsed";
import { StoreSnippet } from "./StoreSnippet";
import Screenshot from "./LtiPreview.png";
export const LtiPlaylist = () => {
  return (
    <>
      <Tabview
        componentName="LtiPlaylistPreview"
        path="\src\containers\Preview\PlaylistPreview\LtiPlaylistPreview.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "react-redux",
          "react-router-dom",
          "prop-types",
          "react-fontawesome",
          "react-bootstrap",
        ]}
        customHooks={[
          {
            name:
              "/src/containers/Preview/PlaylistPreview/components/PreviousLink",
            url: "www.google.com",
          },
          {
            name: "/src/containers/Preview/PlaylistPreview/components/NextLink",
            url: "www.google.com",
          },
          {
            name:
              "/src/containers/Preview/PlaylistPreview/components/ActivitiesDropdown",
            url: "www.google.com",
          },
          {
            name: "/src/containers/H5PPreview",
            url: "www.google.com",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actions/playlist", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="hhttps://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/47553/preview"
      />
    </>
  );
};
