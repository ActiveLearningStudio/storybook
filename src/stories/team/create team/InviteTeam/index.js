import React from 'react';
import { Tabview } from '../../../../component/Tabview'
import {IndexSnippet} from './code.js'
import {IndexStore} from '../../indexStore' 
import InviteTeam from './inviteTeam.png';
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Teams\components\InviteTeam\index.js"
    description="In invite team members, you can invite your team members to join your team. 
    You will see a list of team members, select from them and click on the invite button.
     After inviting members, you can click on the continue button to process your team creation step."
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux']}
    customHooks={[
      {name:'/src/components/InviteDialog/index',url:'?path=/story/component-invitedialogue--component'},
      {name:'/src/containers/Teams/CreateTeam/components/InviteTeam/MemberItem',url:''}
    ]}
    reduxStore= {[
      {path:'/src/store/actions/team',pathCode:IndexStore}
    ]}
    apiUsed= {[
      
    ]}
    images={InviteTeam}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/teams/create-team"

    
    />
    
    </>
  );
};
