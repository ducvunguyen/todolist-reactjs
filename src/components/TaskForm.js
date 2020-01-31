import React, {Component} from 'react';

class TaskForm extends Component{
	//tat form add data
	constructor(props){
		super(props);
		this.state={
			id: '',
			name: '',
			status: false,
		}
	}
	componentWillMount(){
		if (this.props.task) {
			this.setState({
				id: this.props.task.id,
				name: this.props.task.name,
				status: this.props.task.status,
			})
		}
		console.log(this.state);
	}
	turnOffForm =()=> {
		this.props.turnOffForm();
	}
	//khi nhap du lieu
	onChange =(event)=>{
		var target = event.target;//lay target
		var name = target.name; // lay name
		var value = target.value; // lay gia tri

		if (name === 'status') {
			value = target.value ==='true' ? true : false;
		}
		this.setState({
			[name] : value,
		});
	}
	//bam submit
	onSubmit =(event)=>{
		event.preventDefault();//ko load lai trang
		this.props.onSubmit(this.state);//truyen data ra APP.js
	}
	//cancel
	onClear =()=>{
		this.setState({
			name: '',
			status: false,
		});

		this.props.turnOffForm();

	}
	render(){
		var {id} = this.state;
		return(
			<div className="panel panel-warning">
	            <div className="panel-heading">
	                <h3 className="panel-title">
	                    {id !=='' ? 'Update task' : 'Add task '}&#160; <span className="center-right glyphicon glyphicon-remove" onClick={ this.turnOffForm }></span>
	                </h3>
	            </div>
	            <div className="panel-body">
	           		<form onSubmit={this.onSubmit}>
	                    <div className="form-group">
	                    	<label>Name: </label>
	                        <input 
	                            type="text" 
	                            className="form-control" 
	                            name="name"
	                            value={this.state.name}
	                            onChange={this.onChange}
	                            />
	                    </div>
	                    <div className="form-group">
	                        <label>Status: </label>
	                        <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
	                            <option value={true} >Active</option>
	                            <option value={false} >Hidden</option>
	                        </select>
	                    </div>
	                    <button type="submit" className="btn btn-warning ">
	                        <span className="glyphicon glyphicon-plus"></span> Save
	                    </button>&nbsp;&nbsp;
	                    <button type="submit" className="btn btn-danger" onClick={this.onClear}>
	                        <span className="glyphicon glyphicon-remove"></span> Cancel
	                    </button>
	                </form>
	            </div>
	        </div>
		);
	} 
} 
export default TaskForm;