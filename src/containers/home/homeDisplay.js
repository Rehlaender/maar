import React from 'react'
import Typed from 'react-typed';

export const homeDisplay = ({
    hiState,
    sayHi,
    user,
    goToHelp
    })=>(
    <div className="homeContainer">
        <h1>home</h1>
        <button onClick={() => {sayHi('mario')}}>say hi</button>  
        <br/>  
        { `${user} said hi? ${hiState}` }
        <button onClick={() => {goToHelp()}}>go to abobut </button>  
        <br/>  
        <Typed 
            strings={['test text']} 
            typeSpeed={80} 
        />
    </div>        
);