import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {IndexSnippet} from './code.js'
import GroupMemberView from './GroupMemberView.png';
import {GroupStore} from '../groupStore.js'
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Groups\GroupsMemberView\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux','swal','react-fontawesome','react-router-dom']}
    customHooks={[
      {name:'/src/components/InviteDialogGroup/index',url:'www.google.com'},
      {name:' /src/containers/Groups/GroupMemberView/GroupMember',url:'www.google.com'}
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/group',pathCode:GroupStore}
    ]}
    apiUsed= {[
      
    ]}
    images={GroupMemberView}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/groups/"

    
    />
    
    </>
  );
};
