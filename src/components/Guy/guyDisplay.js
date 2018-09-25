import React from 'react'
import { relative } from 'upath';

export const guyDisplay = ({
    })=>(
    <div style={style.fixedContainer}>
        <div style={style.guy}>
            <div style={style.dialogBox}>dialog</div>
            <div style={style.body}>*body</div>
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
        top: '-20px',
        left: '-100px',
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