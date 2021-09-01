import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {IndexSnippet} from './code.js'
import MemberView from './teamMemberView.png';
import {IndexStore} from '../indexStore.js'
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Teams\TeamMemberView\index.js"
    description="In the teamMemebrview component, you will see a search box where 
    you can search any member and invite him/her to join your team. There is also 
    a remove button in front of the member name, from where you can easily remove 
    the team member with one click."
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux','swal','react-fontawesome','react-router-dom']}
    customHooks={[
      {name:'/src/components/InviteDialog/index',url:'?path=/story/component-invitedialogue--component'},
      {name:' /src/containers/Teams/TeamMemberView/TeamMember',url:''}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/team',pathCode:IndexStore}
    ]}
    apiUsed= {[
      
    ]}
    images={MemberView}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/teams/88"

    
    />
    
    </>
  );
};
