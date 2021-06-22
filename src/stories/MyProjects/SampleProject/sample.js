import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {SampleSnippet} from './code.js'
import sampleProject from './sampleProject.png';
import {ProjectStore} from '../projectStore.js'
import {Stylesheetused}  from '../stylesheetUsed.js';
export const Sample = () => {
   return (
     <>
    <Tabview
    componentName="SampleProjects"
    path="\src\containers\Projects\SampleProjectCard.js"
    description="This is the Description of Compoennt"
    codeSnippet={SampleSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','react-fontawesome','react-router-dom','prop-types','Swal']}
    customHooks={[
      {name:'components/models/activitySample',url:'www.google.com'},{name:'containers/Preview/ProjectPreview/ProjectPreviewShared',url:'www.google.com'},
     
    
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'store/actions/project',pathCode:ProjectStore}

    ]}
    apiUsed= {[
      
    ]}
    images={sampleProject}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio"

    
    />
    
    </>
  );
};
