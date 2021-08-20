import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {IndexSnippet} from './code.js'
import AddMember from './addMember.png';
import {IndexStore} from '../indexStore.js'
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Teams\AddMembers\index.js"
    description="In this component, we can add members to the team during the creation of a new team.
     Simply you need to enter the member name/email in the search box and then click on add button. 
     In this way, you can easily add a member to the team."
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux','swal','react-fontawesome']}
    customHooks={[
      {name:'/src/containers/Teams/AddMembers/TeamMember',url:'www.google.com'}

    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/team',pathCode:IndexStore}
    ]}
    apiUsed= {[
      
    ]}
    images={AddMember}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/teams/88/projects/4756/add-member"

    
    />
    
    </>
  );
};
