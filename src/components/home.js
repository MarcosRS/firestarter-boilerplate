import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/table.scss'

class Tasks extends React.Component {
    render() {
      return (
        <div>
            <h1>Fire Starter Initialized 🔥</h1>
            <Link to='/users'><button className='button'>Users</button></Link>
            <Link to='/tasks'><button className='button'> Tasks</button></Link>
        </div>
      );
    }
  }

  export default Tasks