import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
          <div id="main">
            <h1>Fire Starter Initialized 🔥</h1>
            {/* <Route exact path="/" component={Homepage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dj" component={DJBooth} />
            <Route path="/:djName/live" component={Room} /> */}
          </div>
      );
    }
  }

  export default App