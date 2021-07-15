import React from "react";
import { Tabview } from "../../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { Stylesheetused } from "./stylesheetUsed";
import { StoreSnippet } from "./StoreSnippet";
import Screenshot from "./indexPreview.png";
export const Index = () => {
  return (
    <>
      <Tabview
        componentName="PlaylistPreview"
        path="\src\containers\Preview\PlaylistPreview\index.js"
        description="This is the Description of Compoennt"
        codeSnippet={CodeSnippet}
        libraryUsed={[
          "react-redux",
          "react-router-dom",
          "prop-types",
          "react-fontawesome",
          "swal",
          "react-switch",
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
              "/src/containers/Preview/PlaylistPreview/components/ActivitiesList",
            url: "www.google.com",
          },
          {
            name: "/src/containers/H5PPreview",
            url: "www.google.com",
          },
        ]}
        reduxStore={[
          { path: "/src/store/actions/resource", pathCode: StoreSnippet },
        ]}
        apiUsed={[]}
        images={Screenshot}
        stylesheetUsed={Stylesheetused}
        examples="hhttps://dev.currikistudio.org/org/testsuborg/project/6091/playlist/12960/activity/47553/preview"
      />
    </>
  );
};
