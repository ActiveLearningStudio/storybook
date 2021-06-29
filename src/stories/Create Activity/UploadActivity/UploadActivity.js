import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import ActivityUploadImg from './UploadActivity.png';
import {ActivityStore} from '../ActivityStore.js'
import {Stylesheetused}  from '../stylesheetUsed.js';
export const UploadActivity= () => {
   return (
     <>
    <Tabview
    componentName="UploadActivity"
    path="\src\containers\CreateActivity\UploadActivity.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['props-types','react-redux','react-router-dom']}
    customHooks={[ 
      {name:'/src/components/ResourceCard/AddResource/Editors/H5PEditor',url:'www.google.com'},
      {name:'/src/components/ResourceCard/AddResource/ResourceDescribeActivity',url:'www.google.com'},
      {name:'/src/containers/CreateActivity/ActivityMeter',url:'www.google.com'}
     
    ]}
    
    reduxStore= {[
      {path:'/src/store/actions/resource',pathCode:ActivityStore}
      
    ]}
    apiUsed= {[
      
    ]}
    images={ActivityUploadImg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/project/6031/playlist/12875/activity/create"
    />
    
    </>
  );
};
