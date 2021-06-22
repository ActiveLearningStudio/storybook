import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {HelpSnippet} from './code.js'
import helpimg from './help.png';
import {SearchStore} from './searchStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Help = () => {
   return (
     <>
    <Tabview
    componentName="Help"
    path="\src\containers\App\help.js"
    description="This is the Description of Compoennt"
    codeSnippet={HelpSnippet}
    libraryUsed={['react-redux']}
    customHooks={[ 
    ]}
    
    reduxStore= {[
      

    ]}
    apiUsed= {[
      
    ]}
    images={helpimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/"
    />
    
    </>
  );
};
