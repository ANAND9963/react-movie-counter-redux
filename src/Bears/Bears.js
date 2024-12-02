import React from 'react';

import { connect } from 'react-redux';
import Bear from "./Bear"

const Bears = (props) => {

    const bears= props.bears;

   
    return (
        <>
          <ul>
            {bears.map((bear,idx)=>(

                <Bear bear = {bear} key ={idx}/>

            ))}
          </ul>
        </>
      );
  
}

const mapStateToProps = (state)=>{

    return{ 
    bears: state.bears,
    }
}

export default connect(mapStateToProps)(Bears);
 
