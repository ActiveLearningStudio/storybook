import React from 'react';
import { Tabview } from '../../../../component/Tabview'
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
    description="The help component will appear in the header section on the top right corner
     of the curriki studio screen. When you click on it, then you will see a list of helping 
     contents in a well-designed modal. In this list, you will see different options for your help like Getting stated,
     Create Learning Projects, curriki studio tips, and many more."
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
