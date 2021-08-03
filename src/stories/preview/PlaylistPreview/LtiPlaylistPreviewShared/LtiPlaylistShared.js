import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { Stylesheetused } from "./stylesheetUsed";
import { StoreSnippet } from "./StoreSnippet";
import Screenshot from "./LtiPreview.png";
export const LtiPlaylistShared = () => {
  return (
    <>
      <Tabview
        componentName="LtiPlaylistPreviewShared"
        path="\src\containers\Preview\PlaylistPreview\LtiPlaylistPreviewShared.js"
        description="In the shared playlist Preview, you will see the preview of those activities 
        which are shared to any platform. There are a lot of other buttons in preview mode, 
        which are to move the next activity, previous activity and then you can also collapse your
         sidebar for a large view."
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
            name:
              "/src/containers/Preview/PlaylistPreview/components/ActivitiesList",
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
