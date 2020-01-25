import React, {Component} from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component{
    render(){
        return(
            <div className="container">
                <div className="text-center">
                    <h1>Quan ly cong viec</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                       {/* <div className="panel panel-warning">
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
                                    <button type="submit" className="btn btn-primary">
                                        <span className="glyphicon glyphicon-plus"></span> Action
                                    </button>&nbsp;&nbsp;
                                    <button type="submit" className="btn btn-warning">
                                        <span className="glyphicon glyphicon-remove"></span> Cancel
                                    </button>
                                </form>
                            </div>
                        </div>*/}
                       <TaskForm />

                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                            <span className="glyphicon glyphicon-plus"></span> Add task
                        </button>
                        <br/>
                        <br/>
                        {/*chuc nang search and sort*/}
                        <Control />

                        <br/>
                        <div className="row">
                           {/* <table className="table table-bordered">
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
                                    <tr>
                                        <td>1</td>
                                        <td>Nguyen</td>
                                        <td className="text-center">
                                            <span className="label label-danger">
                                                Active
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-warning">
                                                <span className="glyphicon glyphicon-pencil"></span> Update
                                            </button>&nbsp; 
                                            <button type="button" className="btn btn-danger">
                                                <span className="glyphicon glyphicon-trash"></span> Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>*/}
                            <TaskList />
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}

export default App;
  