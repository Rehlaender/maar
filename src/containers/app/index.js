import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//components
import { MenuContainer } from '../../components/Menu/Menu';
import { GuyContainer } from '../../components/Guy/guyContainer';
//routes
import { RouterModule } from '../../routerModule';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {_height: window.innerHeight, _width: window.innerWidth};

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
  }

  handleResize() {
    window.addEventListener('resize', () => {
      this.setState({_height: window.innerHeight, _width: window.innerWidth})
    });
  }

  render() {
    const {_height, _width} = this.state;
    return (
      <div className="app" style={{position: 'relative', background: 'red', height: _height, width:_width}}>
          <MenuContainer />
          <GuyContainer />
          {JSON.stringify(this.state)}
          <main>
            { 
              RouterModule.map((route, i) => {
                return <Route key={i} exact={(i === 0)} path={route.route} component={route.component} />
              })
            }
          </main>
        </div>
    )
  }
}