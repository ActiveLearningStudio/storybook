import React from 'react';


export const Customhooks = (props) => {
 
  const {hookUsed} = props;  
 
   return (
 <div>
    {hookUsed?.map(key => {
        var url ="";
        if(key === 'react-bootstrap'){
            url='https://react-bootstrap.github.io/getting-started/introduction/'
        } else if (key === 'react-redux') {
            url='https://react-redux.js.org/'
        }
    return ( <div>
         <h5>{key}</h5>
         <a href={url} target="_blank">link to library</a>
         </div>)
    })}
  </div>)
};




 
 