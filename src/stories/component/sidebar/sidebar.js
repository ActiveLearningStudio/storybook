import React from "react";
import { Tabview } from "../../../component/Tabview";
import { SidebarSnippet } from "./code.js";
import sidebarimg from "./sidebar.png";
import { SidebarStore } from "./Store.js";
import { Stylesheet } from "./stylesheetUsed.js";
export const Sidebar = () => {
  return (
    <>
      <Tabview
        componentName="Sidebar"
        path="\src\components\Sidebar\index.js"
        description="All the links in the sidebar are managed through this component. 
        There is also a toggle button to move the sidebar left for maximizing screen width.
        All the links in the sidebar are managed through the router. In the sidebar, 
        you will see links related to my projects, teams, groups, etc."
        codeSnippet={SidebarSnippet}
        libraryUsed={[
          "prop-types",
          "react-router-dom",
          "react-redux",
          "react-fontawesome",
          "react-bootstrap",
        ]}
        customHooks={[]}
        //customHooks={['./formik/createOrg','removeActiveAdminForm']}
        reduxStore={[
          { path: "/src/store/actions/project", pathCode: SidebarStore },
        ]}
        apiUsed={[]}
        images={sidebarimg}
        stylesheetUsed={Stylesheet}
        examples="https://dev.currikistudio.org/org/currikistudio"
      />
    </>
  );
};
