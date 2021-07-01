import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import {Stylesheetused}  from './stylesheetUsed.js';
import {StoreSnippet} from './Store.js';
import {ApiSnippet} from './ApiUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Dashboard\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['react-redux','prop-types','swal','react-fontawesome','recharts','react-bootstrap']}
    customHooks={[
      {name:'/src/containers/Dashboard/SlideModal/index',url:'www.google.com'}, 
      {name:'/src/components/Footer/index',url:'www.google.com'}
    ]}
    
    reduxStore= {[
      {path:'/src/store/actions/metrics',pathCode:StoreSnippet}
    ]}
    apiUsed= {[  
      {path:'/src/services/metrics.service',apicode:ApiSnippet}
    ]}
    images=''

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio"
    />
    
    </>
  );
};
