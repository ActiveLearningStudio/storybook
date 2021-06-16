import React from 'react';

import {  Alert } from "react-bootstrap";
export const Libraries = (props) => {
 
  const {libUsed} = props;  
 
   return (
 <ol>
    {libUsed?.length > 0?libUsed?.map(key => {
        var url ="";
        if(key === 'react-bootstrap'){
            url='https://react-bootstrap.github.io/getting-started/introduction/'
        } else if (key === 'react-redux') {
            url='https://react-redux.js.org/'
        }
        else if (key === 'react-fontawesome') {
          url='https://fontawesome.com/v5.15/how-to-use/javascript-api/setup/library/'
      } else if (key === 'formik') {
        url='https://formik.org/docs/overview'
      }else if (key === 'prop-types') {
        url='https://reactjs.org/docs/typechecking-with-proptypes.html'
      }else if (key === 'swal') {
        url='https://www.npmjs.com/package/react-swal'
      }
      
      
        
    return ( 
        <li>

        <h5>{key}
       
       <a href={url} target="_blank">link to library</a></h5>
        </li>
      )
    }): 
    <Alert variant="primary" >No Information avaialble</Alert>
    }
  </ol>)
};




 
 