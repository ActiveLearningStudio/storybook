import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {HeadlineSnippet} from './head.js'
import Headlineimg from './headline.png';
import {ProjectStore} from '../projectStore.js'
import {Stylesheetused}  from '../stylesheetUsed.js';
export const Headline = () => {
   return (
     <>
    <Tabview
    componentName="Headline"
    path="\src\containers\Projects\headlne.js"
    description="This is the Description of Compoennt"
    codeSnippet={HeadlineSnippet}
    libraryUsed={[ 'react-redux','react-fontawesome','react-router-dom']}
    customHooks={[
   
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/project',pathCode:ProjectStore}

    ]}
    apiUsed= {[
      
    ]}
    images={Headlineimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://multitenancy.currikistudio.org/org/currikistudio"

    
    />
    
    </>
  );
};
