import React, { Component } from 'react';
import styled from 'styled-components'

const OptionContainer = styled.div `
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`

export class Option extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <OptionContainer
                onClick={() => this.props.goToRoute()}
                style={{...style}}>
                {this.props.route.name}
            </OptionContainer>
        )
    }   
}

const style = {
    cursor: 'pointer'
};

