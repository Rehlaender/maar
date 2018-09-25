import React from 'react';
import { Route } from 'react-router-dom';

//components
import { MenuContainer } from '../../components/Menu/Menu';
import { GuyContainer } from '../../components/Guy/guyContainer';
//routes
import { RouterModule } from '../../routerModule';

const App = () => (
  <div className="app" style={{position: 'relative'}}>
    <MenuContainer />
    <GuyContainer />
    <main>
      { 
        RouterModule.map((route, i) => {
          return <Route key={i} exact={(i === 0)} path={route.route} component={route.component} />
        })
      }
    </main>
  </div>
);

export default App;