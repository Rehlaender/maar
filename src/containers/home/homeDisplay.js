import React from 'react'
import Textures from 'react-svg-textures';
import {Motion, spring} from 'react-motion';
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
        <Texture isMoved={hiState} />
    </div>
);

const Texture = (props) => {
    return ( 
    <div>
        <svg width={500} height={500}>
            <Lines
                id='pattern'
                strokeWidth={1}
                stroke='black'
                size={10}
                orientation='diagonal'
                background='blue'
            />
            <Motion style={{x: spring(props['isMoved'] ? 500 : 0)}}>
                {({x}) =>
                    // children is a callback which should accept the current value of
                    // `style`
                    <circle cx={x} cy={100} r={50} fill='url(#pattern)' />
                }
            </Motion>
            <path d={pine} fill='url(#pattern)'></path>
        </svg>
    </div>
    )
    };