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
        this.handleChange = this.handleChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    componentDidMount(){
         this.getUsers()
    }

    handleChange(attr, value){
        let userInfo = this.state.userInfo;
        userInfo[attr] = value;
        this.setState(userInfo);
    }

    createUser() {
        fetch('/api/users', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.userInfo)
        })
        .then(res => res.json())
        .then(newUser => {
            let userList = this.state.userList;
            userList.push(newUser);
            this.setState({userList});
        })
        
    }

    getUsers(){
        return  fetch('/api/users', {
                    method: "GET"
                })
                .then(res => res.json())
                .then((userList = []) => {
                    this.setState({userList})
                })
    }

    render() {
        const userList = this.state.userList;
        return (
            <div>
                <h1 className="header"><u>Users</u></h1>
                <form className="form" >
                    <label className="label" >Name: </label>
                    <input type="text" className="input" value={this.state.userInfo.name}  onChange={(e)=>{ this.handleChange('name', e.target.value) }} />
                    <label className="label" >Email: </label>
                    <input type="text"  className="input" value={this.state.userInfo.email}  onChange={(e)=>{ this.handleChange('email', e.target.value) }} />
                    <button className="button" onClick={ (e) => {e.preventDefault(); this.createUser()}} >Create User</button>
                </form>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                        {userList.map( (user, index)  =>{
                            return  <tr key={`${index}`}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                        })}
                        <tr>
                            
                        </tr>
                    </tbody>
                </table>
                <br/>
                <Link to='/'><button className='button'>{'< Home'}</button></Link>
            </div>
      );
    }
  }

  export default Users