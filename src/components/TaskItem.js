import React, {Component} from 'react';

class TaskItem extends Component {
  onUpdateStatus =()=>{
    var id = this.props.task.id;
    // console.log(id);
    this.props.onUpdateStatus(id);
  }
  onDeleteItem =()=>{
    var id = this.props.task.id;
    this.props.onDeleteItem(id);
  }
  onUpdate =()=>{
    var id = this.props.task.id;
    this.props.onUpdate(id);
  }
	render(){
    var {task, index} = this.props;
		return(
			<tr>
          <td>{index+1}</td>
          <td>{task.name}</td>
          <td className="text-center">
              <span onClick={this.onUpdateStatus} className={task.status===true ? "label label-danger" : "label label-success"}>
                  {task.status===true ? "Active" : "Hidden"}
              </span>
          </td>
          <td className="text-center">
              <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
                  <span className="glyphicon glyphicon-pencil"></span> Update
              </button>&nbsp; 
              <button type="button" className="btn btn-danger" onClick={this.onDeleteItem}>
                  <span className="glyphicon glyphicon-trash"></span> Delete
              </button>
          </td>
      </tr>
		);
	}
}
export default TaskItem;