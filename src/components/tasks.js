import React from 'react';

class Users extends React.Component {
    constructor(){
        super()
        this.state = {
            taskInfo: {
                "userId": 0,
                "task": ''
            },
            taskList:[]
        }
    }

    handleChange(attr, value){
        this.setState({[attr]: value});
    }

    createTask() {

    }

    render() {
      return (
          <div>
            <h1 className="header"><u>Task</u></h1>
            <form className="form" >
                <label className="label" >User: </label>
                <select className="select" name="user">
                    <option value="volvo">Juan</option>
                    <option value="saab">Pablo</option>
                </select>
                <label className="label" >Task </label>
                <input type="text"  className="input" value={this.state.task}  onChange={(e)=>{ this.handleChange('task', e.target.value) }} />
                <button className="button" onClick={ (e) => {e.preventDefault(); this.createTask}} >Create Task</button>
            </form>
            <table>
                <tr>
                    <th>User</th>
                    <th>Task</th>
                </tr>
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
            </table>
        </div>
      );
    }
  }

  export default Users