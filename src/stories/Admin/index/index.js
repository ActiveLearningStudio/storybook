import React from 'react';
import './index.css';
import { Tabview } from '../../../component/Tabview'
import {codeSnippet} from './code.js'
import IndexPageimg from './indexPage.png';
import {IndexStore} from './indexStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\ActiveLearningStudio-react-client\src\containers\Admin\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={codeSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','react-fontawesome']}
    customHooks={[
      {name:'./formik/createActivityItem',url:'www.google.com'},{name:'./formik/createOrg',url:'www.pakistan.com'},{name:'./formik/addRole',url:'www.google.com'},{name:'./formik/createuser',url:'www.google.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/admin',pathCode:IndexStore}

    ]}
    apiUsed= {[
      
    ]}
    images={IndexPageimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/admin"

    
    />
    
    </>
  );
};
