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
    description="This is the Description of Compoennt"
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux']}
    customHooks={[
      {name:'/src/components/InviteDialog/index',url:'www.google.com'},
      {name:'/src/components/InviteDialog/index',url:'www.google.com'},
      {name:'/src/containers/Teams/CreateTeam/components/InviteTeam/MemberItem',url:'www.google.com'}
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
