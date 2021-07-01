import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import {Stylesheetused}  from './stylesheetUsed.js';
import {StoreSnippet} from '../Store.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Dashboard\ActivityList\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['react-redux','prop-types','react-fontawesome','react-bootstrap']}
    customHooks={[ 
    ]}
    
    reduxStore= {[
      {path:'/src/store/actions/dashboard',pathCode:StoreSnippet}
    ]}
    apiUsed= {[  
    ]}
    images=''

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio"
    />
    
    </>
  );
};
