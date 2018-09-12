import React, { Component } from 'react';

import { Option } from './Option';

export class Menu extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const routes = this.props.routes.map((route, i)=> {
            return <Option key={i} route={route} goToRoute={() => this.props.goToRoute(route.route)}/>
        });
        return (
            <div style={style.menu}>
                {routes}
            </div>
        )
    }   
}

const style = {
    menu: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingLeft: 0,
        listStyle: 'none',
    }
};
