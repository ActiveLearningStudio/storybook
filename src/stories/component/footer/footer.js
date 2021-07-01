import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {FooterSnippet} from './code.js'
import footerimg from './footer.PNG';
import {SearchStore} from './searchStore.js'
import {Stylesheetused}  from './stylesheetUsed.js';
export const Footer = () => {
   return (
     <>
    <Tabview
    componentName="Footer"
    path="\src\components\Footer\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={FooterSnippet}
    libraryUsed={[]}
    customHooks={[
     
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      

    ]}
    apiUsed= {[
      
    ]}
    images={footerimg}

    stylesheetUsed= {Stylesheetused}
    examples="https://dev.currikistudio.org/org/currikistudio"

    
    />
    
    </>
  );
};
