import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import ActivityWizardImg from './EditActivity.png';
import {ActivityStore} from '../ActivityStore.js'
import {Stylesheetused}  from '../stylesheetUsed.js';
export const ActivityWizard= () => {
   return (
     <>
    <Tabview
    componentName="ActivityWizard"
    path="\src\containers\EditActivity\ActivityWizard.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['props-types','react-redux','react-router-dom','swal']}
    customHooks={[ 
      {name:'/src/components/ResourceCard/EditResource/ResourceDescribeActivity',url:'www.google.com'},
      {name:'/src/components/ResourceCard/EditResource/ResourceActivityBuild',url:'www.google.com'},
      {name:'/src/containers/EditActivity/ActivityMeter',url:'www.google.com'},
    ]}
    
    reduxStore= {[
      {path:'/src/store/actions/resource',pathCode:ActivityStore}
      
    ]}
    apiUsed= {[
      
    ]}
    images={ActivityWizardImg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/project/6031/playlist/12875/activity/47411/edit"
    />
    
    </>
  );
};
