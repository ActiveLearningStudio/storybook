import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import ActivityMeterImg from './ActivityMeter.png';
import {Stylesheetused}  from '../stylesheetUsed.js';
export const ActivityMeter= () => {
   return (
     <>
    <Tabview
    componentName="ActivityMeter"
    path="\src\containers\CreateActivity\ActivityMeter.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['props-types']}
    customHooks={[ 
     // {name:'/src/utils/index',url:'www.google.com'},
     
    ]}
    
    reduxStore= {[
      
    ]}
    apiUsed= {[
      
    ]}
    images={ActivityMeterImg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/project/6031/playlist/12875/activity/create"
    />
    
    </>
  );
};
