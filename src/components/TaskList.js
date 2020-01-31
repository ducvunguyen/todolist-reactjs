import React, {Component} from 'react';
import TaskItem  from './TaskItem';

class TaskList extends Component {
  // chuc nang fillter
  constructor(props){
    super(props);
    this.state = {
            filterName: '', // tim kiem theo name
            filterStatus: -1, // tim kiem theo status, all= -1, active = 1, hidden : 0
        };
    }

    onChange = (event)=>{
        var {filterName, filterStatus} = this.state;
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(name === 'filterName' ? value : filterName, name === 'filterStatus' ? value : filterStatus);
        this.setState({
            [name]: value,
        });
    }

	render(){
    var tasks = this.props.listTask; // cung co the viet var {listTask} = this.props

    var element = tasks.map((task, index) =>{
      return <TaskItem 
        key={task.id} 
        index={index} 
        task={task} 
        onUpdateStatus={this.props.onUpdateStatus} 
        onDeleteItem={this.props.onDeleteItem}
        onUpdate={this.props.onUpdate}/>
    });

		return(
			<table className="table table-bordered">
          <thead>
              <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td></td>
                  <td>
                      <input name="filterName" className="form-control" type="text" value={this.state.filterName} onChange={this.onChange} />
                  </td>
                  <td className="text-center">
                      <select 
                      className="form-control"
                      name="filterStatus"
                      value={this.state.filterStatus} 
                      onChange={this.onChange} >
                          <option value={-1}>All</option>
                          <option value={0}>Hidden</option>
                          <option value={1}>Active</option>
                      </select>
                  </td>
                  <td></td>
              </tr> 
              {element}
          </tbody>
      </table>
		);
	}
}
export default TaskList;