import React from 'react';
import './search.css';
import  { Tabview } from '../../../component/Tabview'
import IndexPageimg from './indexPage.png';
export const Search = () => {
   return (
     <>
     <Tabview
    componentName="Index"
    path="\ActiveLearningStudio-react-client\src\containers\Admin\index.js"
    description="this is the description of help compoennt"
    codeSnippet="hello raja jee"
    libraryUsed={['react-bootstrap', 'react-redux','@fortawesome/react-fontawesome']}
    customHooks={[
      {name:'./formik/createActivityItem',url:'www.google.com'},{name:'./formik/createOrg',url:'www.pakistan.com'},{name:'./formik/addRole',url:'www.google.com'},{name:'./formik/createuser',url:'www.google.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    images={IndexPageimg}
    stylesheetUsed= "style sheet will  be here"
    examples="https://multitenancy.currikistudio.org/org/currikistudio/admin"
    
    />
    
    </>
  );
};
