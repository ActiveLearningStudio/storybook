import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CardSnippet} from './cardSnippet.js'
import card from './card.png';
import {ProjectStore} from '../projectStore.js'

import { Stylesheet } from './stylesheet';
export const Card = () => {
   return (
     <>
    <Tabview
    componentName="index"
    path="\src\containers\Projects\ProjectCard/index.js"
    description="This is the Description of Compoennt"
    codeSnippet={CardSnippet}
    libraryUsed={['react-bootstrap', 'react-redux','react-fontawesome','react-router-dom','prop-types','Swal']}
    customHooks={[
      {name:'/src/components/SharePreviewPopup/index',url:'www.google.com'},{name:'/src/containers/Projects/ProjectCard/ProjectCardDropdown',url:'www.google.com'},
      {name:'/src/containers/Projects/ProjectPreviewModal/index',url:'www.google.com'}
    
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'store/actions/project',pathCode:ProjectStore}

    ]}
    apiUsed= {[
      
    ]}
    images={card}

    stylesheetUsed= {Stylesheet}
    examples="https://multitenancy.currikistudio.org/org/currikistudio"

    
    />
    
    </>
  );
};
