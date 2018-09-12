import React from 'react';
import { Route,  } from 'react-router-dom';

//routes
import HomeContainer from '../home/homeContainer';
import HelpContainer from '../help/helpContainer';

const App = () => (
  <div className="app">   
    <main>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/help" component={HelpContainer} />
    </main>
  </div>
);

export default App;