import React, {Component} from 'react';

class TaskForm extends Component{
	render(){
		return(
			<div className="panel panel-warning">
	            <div className="panel-heading">
	                <h3 className="panel-title">
	                    Add task &#160; <span className="glyphicon glyphicon-remove"></span>
	                </h3>
	            </div>
	            <div className="panel-body">
	           		<form>
	                    <div className="form-group">
	                    	<label>Name: </label>
	                        <input 
	                            type="text" 
	                            className="form-control" 
	                            name="name"
	                            />
	                    </div>
	                    <div className="form-group">
	                        <label>Status: </label>
	                        <select className="form-control" name="status" >
	                            <option value={true} >Action</option>
	                            <option value={false} >Hidden</option>
	                        </select>
	                    </div>
	                    <button type="submit" className="btn btn-warning ">
	                        <span className="glyphicon glyphicon-plus"></span> Save
	                    </button>&nbsp;&nbsp;
	                    <button type="submit" className="btn btn-warning">
	                        <span className="glyphicon glyphicon-remove"></span> Cancel
	                    </button>
	                </form>
	            </div>
	        </div>
		);
	} 
} 
export default TaskForm;