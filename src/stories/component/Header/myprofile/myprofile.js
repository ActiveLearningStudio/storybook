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
    description="This is the profile dropdown component where the different options will
     be shown related to your profile. Through this component, you can easily see links 
     related to your profile like change password, my account details, etc.
      Also, this component will import into the index of the header section."
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
