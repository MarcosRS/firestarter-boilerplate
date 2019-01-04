import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './home';
import Users from './users';
import Tasks from './tasks';

import '../stylesheets/global.scss';
import '../stylesheets/form.scss'
import '../stylesheets/table.scss'

class App extends React.Component {
    render() {
      return (
          <div id="main">
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/tasks" component={Tasks} />
          </div>
      );
    }
  }

  export default App