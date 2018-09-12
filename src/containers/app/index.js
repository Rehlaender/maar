import React from 'react';
import { Route,  } from 'react-router-dom';

//routes
import HomeContainer from '../home/homeContainer';

const App = () => (
  <div className="app">   
    <main>
      <Route path="*" component={HomeContainer} />
    </main>
  </div>
);

export default App;