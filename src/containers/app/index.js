import React from 'react';
import { Route } from 'react-router-dom';

import HomeContainer from '../home/homeContainer';

//routes

const App = () => (
  <div className="app">
    <main>
      <Route path="*" component={Home} />
    </main>
  </div>
);

export default App;