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
    path="\src\containers\Dashboard\SlideModal\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['prop-types','styled-components','react-fontawesome','react-animations']}
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
