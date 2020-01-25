import React, {Component} from 'react';
import TaskItem  from './TaskItem';

class TaskList extends Component {
	render(){
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
                      <input name="filterName" className="form-control" type="text" />
                  </td>
                  <td className="text-center">
                      <select 
                      className="form-control"
                      name="filterstatus">
                          <option value={-1}>All</option>
                          <option value={0}>Hidden</option>
                          <option value={1}>Active</option>
                      </select>
                  </td>
                  <td></td>
              </tr> 
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <TaskItem />
          </tbody>
      </table>
		);
	}
}
export default TaskList;