import React from 'react';
import { Route } from 'react-router-dom';

//components
import { Menu } from '../../components/Menu/Menu';

//routes
import { RouterModule } from './routerModule';

import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {goToRoute: route => push(route)},
    dispatch
  );

const App = ({
  goToRoute
  })=>(
    <div className="app">   
    <Menu routes={RouterModule} goToRoute={goToRoute} />
    <main>
      { 
        RouterModule.map((route, i) => {
          return <Route key={i} exact={(i === 0)} path={route.route} component={route.component} />
        })
      }
    </main>
  </div>
);

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(
  App
);