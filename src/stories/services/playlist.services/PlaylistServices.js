import React from "react";
import { Tabview } from "../../../component/Tabview";
import { CodeSnippet } from "./code.js";
import { ApiCode } from "./apiCode.js";
export const PlaylistServices = () => {
  return (
    <>
      <Tabview
        componentName="PlaylistServices"
        path="\src\services\playlist.services.js"
        description="You will get any data related to the playlist of the project here in this service module. 
        If you are going to create the playlist then create API will be called. 
        To get, update, delete and reorder related APIs are also present in this services module. 
        On the other hand, if you are using your playlist in the Lti area then you will also be called
         load LTI  API for displaying  the playlist in LTI mode."
        codeSnippet={CodeSnippet}
        libraryUsed={["config"]}
        customHooks={[]}
        reduxStore={[]}
        apiUsed={[{ path: "/src/services/http.service", apicode: ApiCode }]}
        images=""
        stylesheetUsed=""
        examples=""
      />
    </>
  );
};
