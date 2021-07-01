import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {CodeSnippet} from './code.js'
import LogoImg from './logo.png';
import {Stylesheetused}  from '../stylesheetUsed.js';
import {StoreSnippet} from '../Store.js';
export const Logo = () => {
   return (
     <>
    <Tabview
    componentName="Logo"
    path="\src\containers\Auth\Logo.js"
    description="This is the Description of Compoennt"
    codeSnippet={CodeSnippet}
    libraryUsed={['react-redux']}
    customHooks={[ 
    ]}
    
    reduxStore= {[
    ]}
    apiUsed= {[  
    ]}
    images={LogoImg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/login"
    />
    
    </>
  );
};
