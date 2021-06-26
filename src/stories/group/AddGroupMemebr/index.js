import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {IndexSnippet} from './code.js'
import AddGroupMember from './AddGroupMember.png';
import {GroupStore} from '../groupStore.js'
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Groups\AddMember\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux','swal','react-fontawesome','lodash']}
    customHooks={[
      {name:'/src/containers/Groups/AddMembers/GroupMember',url:'www.google.com'}
    ]}
    reduxStore= {[
      {path:'/src/store/actions/group',pathCode:GroupStore}
    ]}
    apiUsed= {[
      
    ]}
    images={AddGroupMember}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/groups"

    
    />
    
    </>
  );
};
