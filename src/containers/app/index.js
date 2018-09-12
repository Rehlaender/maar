import React from 'react';
import { Route } from 'react-router-dom';

//components
import { Menu } from '../../components/Menu/Menu';

//routes
import { RouterModule } from './routerModule';

const App = () => (
  <div className="app">   
    <Menu routes={RouterModule}/>
    <main>
      { 
        RouterModule.map((route, i) => {
          return <Route exact={(i === 0)} path={route.route} component={route.component} />
        })
      }
    </main>
  </div>
);

export default App;