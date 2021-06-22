import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {codeSnippet} from './code.js'
import CreateProjectimg from './createProject.png';
import {ProjectStore} from '../projectStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const CreateProject = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Projects\CreateProjectPopup/index.js"
    description="This is the Description of Compoennt"
    codeSnippet={codeSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','react-router-dom','prop-types','Swal']}
    customHooks={[
      {name:'/src/components/InputField/index',url:'www.google.com'},{name:'/src/components/TextareaField/index',url:'www.google.com'},
      {name:'/src/components/TextareaField/index',url:'www.google.com'}
      
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'store/actions/project',pathCode:ProjectStore}

    ]}
    apiUsed= {[
      
    ]}
    images={CreateProjectimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio"

    
    />
    
    </>
  );
};
