import React from 'react'
import Typed from 'react-typed';

export const guyDisplay = ({
    guyState,
    speech,
    speechIsLoop
    })=>(
    <div style={style.fixedContainer}>
        <div style={style.guy}>
            <div style={style.dialogBox}>
                <Typed 
                strings={[...speech]} 
                typeSpeed={80}
                loop={speechIsLoop} 
                />
            </div>
            <div style={style.body}>*body {`${guyState}, ${speech}, ${speechIsLoop}`}</div>
        </div>
    </div>
);

const style = {
    guy: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        color: 'white'
    }, 
    dialogBox: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '-200px',
        left: '-300px',
        width: '100px',
        height: '100px',
        background: 'black'
    },
    body: {
        width: '100px',
        height: '100px',
        background: 'black'
    }
};