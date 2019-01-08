import React from 'react';
import { Link } from 'react-router-dom';

class Users extends React.Component {
    constructor(){
        super()
        this.state = {
            userInfo:  {
                "name":'',
                "email": ''
            },
            userList:[]
        }
    }

    handleChange(attr, value){
        this.setState({[attr]: value});
    }

    createUser() {

    }

    render() {
      return (
          <div>
            <h1 className="header"><u>Users</u></h1>
            <form className="form" >
                <label className="label" >Name: </label>
                <input type="text" className="input" value={this.state.name}  onChange={(e)=>{ this.handleChange('name', e.target.value) }} />
                <label className="label" >Email: </label>
                <input type="text"  className="input" value={this.state.email}  onChange={(e)=>{ this.handleChange('email', e.target.value) }} />
                <button className="button" onClick={ (e) => {e.preventDefault(); this.createUser}} >Create User</button>
            </form>
            <table>
                <thead>
                 <tr>
                    <th>User</th>
                    <th>Task</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                    </tr>
                </tbody>
            </table>
            <Link to='/'><button className='button'>{'< Home'}</button></Link>
        </div>
      );
    }
  }

  export default Users