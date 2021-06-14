import React from 'react';
import './search.css';
import  { Tabview } from '../component/Tabview'

export const Search = () => {
   return (
     <>
    <Tabview
    componentName="Search"
    path="src/actions/index.js"
    description="this is description of help compoennt"
    codeSnippet="this will be code snippet of component"
    libraryUsed="this is the library of this component"
    customHooks="this wil be custom hooks of compenents"
    images="this will be images used by component"
    
    />
    
    </>
  );
};
