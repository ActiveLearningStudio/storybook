import React from 'react';
import './index.css';
import { Tabview } from '../../../component/Tabview'
import {codeSnippet} from './code.js'
import IndexPageimg from './indexPage.png';
import {Stylesheetused}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="src/actions/index.js"
    description="this is description of help compoennt"
    codeSnippet={codeSnippet}
    libraryUsed={['react-bootstrap', 'react-redux']}
    customHooks={[
      {name:'raja',url:'http://w3scool.com'},{name:'faisal',url:'www.pakistan.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    images={IndexPageimg}
    stylesheetUsed= {Stylesheetused}
    examples="https://multitenancy.currikistudio.org/org/currikistudio/admin"
    
    />
    
    </>
  );
};
