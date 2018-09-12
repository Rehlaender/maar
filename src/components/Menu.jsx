import React, { Component } from 'react';

export class Menu extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(this.props, 'props');
        const routes = this.props.routes.map(route => <p>{route.name}</p>);
        return (
            <div>
                {routes}
            </div>
        )
    }   
}