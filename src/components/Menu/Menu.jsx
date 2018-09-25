import React from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RouterModule } from '../../routerModule';

import { Option } from './Option';

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {goToRoute: route => push(route)},
    dispatch
  );

export const Menu = ({
    goToRoute
}) => (
        <div style={style.menu}>
            {
                RouterModule.map((route, i)=> {
                    return <Option key={i} route={route} goToRoute={() => goToRoute(route.route)}/>
                })
            }
        </div>
);

export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(
    Menu
);
  
const style = {
    menu: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingLeft: 0,
        listStyle: 'none',
    }
};