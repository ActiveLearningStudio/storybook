import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {SidebarSnippet} from './code.js'
import sidebarimg from './sidebar.png';
import {SidebarStore} from './Store.js'
import {Stylesheet}  from './stylesheetUsed.js';
export const Sidebar = () => {
   return (
     <>
    <Tabview
    componentName="Footer"
    path="\src\components\Sidebar\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={SidebarSnippet}
    libraryUsed={['prop-types','react-router-dom','react-redux','react-fontawesome','react-bootstrap']}
    customHooks={[
     
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/project',pathCode:SidebarStore}
      

    ]}
    apiUsed= {[
      
    ]}
    images={sidebarimg}

    stylesheetUsed= {Stylesheet}
    examples="https://dev.currikistudio.org/org/currikistudio"

    
    />
    
    </>
  );
};
