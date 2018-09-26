import React from 'react'
import Typed from 'react-typed';
import Textures from 'react-svg-textures';
import {pine} from '../../assets/svg/tree';
const Lines = Textures.Lines;

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
        <Texture />
    </div>        
);

const Texture = () => (
    <svg width={500} height={500}>
      <Lines
        id='pattern'
        strokeWidth={1}
        stroke='black'
        size={10}
        orientation='diagonal'
        background='blue'
      />
      <circle cx={100} cy={100} r={50} fill='url(#pattern)' />
      <path d={pine} fill='url(#pattern)'></path>
    </svg>
  );