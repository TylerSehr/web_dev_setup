import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Cookie from 'universal-cookie'

import Dashboard from './components/dashboard/dashboard.js'
import SignIn from './components/signin/signin.js'



const cookies = new Cookie();

class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    let content;

    if (cookies.get('session')) {
      content = (<div className="App">
        <Router>
          <Switch>
            <Route
              path="/"
              component={Dashboard}
            />
          </Switch>
        </Router>
      </div>)
    }
    else {
      content = (<div className="App">
        <Router>
          <Switch>
            <Route
              path="/"
              component={SignIn}
            />
          </Switch>
        </Router>
      </div>)
    }

    return (
      content
    );
  }
}

export default App;
