import React from 'react';
import { Tabview } from '../../../../component/Tabview'
import {ProfileSnippet} from './code.js'
import Profileimg from './profile.PNG';
import {Stylesheetused}  from './stylesheetUsed.js';
export const Myprofile = () => {
   return (
     <>
    <Tabview
    componentName="Myprofile"
    path="\src\components\Header\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={ProfileSnippet}
    libraryUsed={['react-bootstrap', 'react-router-dom','react-fontawesome']}
    customHooks={[
      
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
    ]}
    apiUsed= {[
      
    ]}
    images={Profileimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio/"

    
    />
    
    </>
  );
};
