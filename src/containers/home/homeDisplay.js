import React from 'react'

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
    </div>        
);