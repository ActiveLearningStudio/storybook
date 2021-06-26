import React from 'react';
import { Tabview } from '../../../../component/Tabview'
import {IndexSnippet} from './code.js'
import {GroupStore} from '../../groupStore' 
import InviteGroup from './inviteGroup.png';
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Groups\components\InviteGroup\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux']}
    customHooks={[
      {name:'/src/components/InviteDialogGroup/index',url:'www.google.com'},
      {name:'/src/utils/index',url:'www.google.com'},
      {name:'/src/containers/Groups/CreateGroup/components/InviteGroup/MemberItem',url:'www.google.com'}
    ]}
    reduxStore= {[
      {path:'/src/store/actions/team',pathCode:GroupStore}
    ]}
    apiUsed= {[
      
    ]}
    images={InviteGroup}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/groups/create-group"

    
    />
    
    </>
  );
};
