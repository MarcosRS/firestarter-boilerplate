import React from 'react';
import { Link } from 'react-router-dom';

class Tasks extends React.Component {
    constructor(){
        super()
        this.state = {
            taskInfo: {
                "userId": 1,
                "task": ''
            },
            taskList: [],
            userList: {}
        }
         this.handleChange = this.handleChange.bind(this);
         this.createTask = this.createTask.bind(this);
    }

    componentDidMount() {
        Promise.all([this.getTasks(), this.getUsers()])
        .then((results) => {
            this.setState({ taskList:results[0], userList: results[1]})
        })
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
                    let userListObj = {}
                    userList.map((user)=>{userListObj[user.id] = user })
                    return userListObj
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
            const taskInfo = { "userId": 1, "task": ' '};
            let taskList = this.state.taskList;
            taskList.push(newTask);
            this.setState({taskInfo, taskList});
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
                <select className="select" name="user" onChange={(e)=>{ this.handleChange('userId', Number(e.target.value)) }}>
                    {Object.values(userList).map((user) => {
                        return <option key={`${user.id}`} value={`${user.id}`}>{user.name}</option>    
                    })}
                </select>
                <label className="label" >Task </label>
                <input type="text" required={true}   className="input" value={this.state.task}  onChange={(e)=>{ this.handleChange('task', e.target.value) }} />
                {(userList.length != 0)  && <button className="button" onClick={ (e) => {e.preventDefault(); this.createTask()}} >Create Task</button>}
            </form>
            <table>
                <thead>
                 <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>User Id</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
                </thead>

                <tbody>
                     {taskList.map((task, i) => {                        
                        return  <tr key={i}>
                                    <td>{task.id}</td>
                                    <td><input value={task.task} onChange={()=>{}} /> {/*<button className="pull-right"> Update </button>*/}</td>
                                    <td>{userList[task.userId].name}</td>
                                    <td>{task.createdAt}</td>
                                    <td>{task.updatedAt}</td>
                                </tr>   
                    })}
                </tbody>   
            </table>
            <br/>
            <Link to='/'><button className='button'>{'< Home'}</button></Link>
        </div>
      );
    }
  }

  export default Tasks