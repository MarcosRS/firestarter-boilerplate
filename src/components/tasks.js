import React from 'react';
import { Link } from 'react-router-dom';

class Tasks extends React.Component {
    constructor(){
        super()
        this.state = {
            taskInfo: {
                "userId": 0,
                "task": ''
            },
            taskList:[],
            userList:[]
        }
         this.handleChange = this.handleChange.bind(this);
         this.createTask = this.createUser.bind(this);
    }

    async componentDidMount() {
      const results = await Promise.all([this.getTasks(), this.getUsers()])
      this.setState({ taskList:results[0], userList: results[1]})
    }

    handleChange(attr, value){
        let taskInfo = this.state.taskInfo;
        taskInfo[attr] = value;
        this.setState({taskInfo});
    }

     getTasks() {
         return fetch('/api/tasks', {
                 method: "GET"
             })
             .then(res => res.json())
             .then((tasksList = []) => {
                 return tasksList
             })
     }
    
    getUsers(){
        return  fetch('/api/users', {
                    method: "GET"
                })
                .then(res => res.json())
                .then((userList = []) => {
                    return userList
                })
    }

    createTask() {
         fetch('/api/tasks', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.taskInfo)
        })
        .then(res => res.json())
        .then(newTask => {
            let taskList = this.state.taskList;
            userList.push(newTask);
            this.setState({taskList});
        })
    }

    render() {
        const taskList = this.state.taskList;
        const userList = this.state.userList;
      return (
          <div>
            <h1 className="header"><u>Task</u></h1>
            
            <form className="form" >
                <label className="label" >User: </label>
                <select className="select" name="user">
                    {userList.map((user, i)=>{
                        <option key={`${user.id}`} value={`${user.id}`}>{user.name}</option>    
                    })}
                    
                    <option value="saab">Pablo</option>
                </select>
                <label className="label" >Task </label>
                <input type="text"  className="input" value={this.state.task}  onChange={(e)=>{ this.handleChange('task', e.target.value) }} />
                <button className="button" onClick={ (e) => {e.preventDefault(); this.createTask}} >Create Task</button>
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
            <br/>
            <Link to='/'><button className='button'>{'< Home'}</button></Link>
        </div>
      );
    }
  }

  export default Tasks