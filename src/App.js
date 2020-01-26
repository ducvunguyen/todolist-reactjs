import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component{
    constructor(props){
      super(props);
      //tao danh sach
      this.state = {
          tasks : [], // id unique, namme, status
          isDisplayForm: false, //isDisplayForm dung an hien form
      };
   }

   //b2 componentWillMount() trong react ham nay se dc goi lan dau tien. vi khi f5 lai du lieu bi mat nhung locaStorate van
   //con luu data do do ta se lay lai data tu localStorage
   componentWillMount(){
    //getTime() nhan gia tri tu task
      if (localStorage && localStorage.getItem('tasks')) {
         //dong nay no se parse du lieu luu tu localStorage
         var tasks = JSON.parse(localStorage.getItem('tasks'));
         this.setState({
            tasks: tasks,
         });
      }
   }

   onGenerateData = () =>{
      var tasks = [
         // {
         //    id : this.generateID(),
         //    name: 'nguyen',
         //    status:  true,
         // },
         // {
         //    id: this.generateID(),
         //    name: 'huong',
         //    status: false,
         // },
         // {
         //    id : this.generateID(),
         //    name: 'nguyen',
         //    status:  true,
         // },
         // {
         //    id: this.generateID(),
         //    name: 'huong',
         //    status: false,
         // },
      ];

      this.setState({
         tasks: tasks,
      });

      //b1 luu vao localStorage, luu tru vao chuoi ta chuyen ve JSON.stringify()
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   //tao random id
   s4(){
      return Math.floor(1 + Math.random() * 0x10000).toString(16).substring(1);
   }

   generateID(){
      return this.s4()  + this.s4();
   }

   onToggleForm =()=>{
       this.setState({
         isDisplayForm: !this.state.isDisplayForm ,
       });
   }

   turnOffForm = ()=>{

      this.setState({
         isDisplayForm: false,
      });
   }

   onSubmit =(data)=>{
      // console.log(data);
      var {tasks} = this.state;
      var DB = {
         id : this.generateID(),
         name : data.name,
         status: data.status,
      }
      tasks.push(DB);
      this.setState({
         tasks : tasks,
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   render(){
      var tasks = this.state.tasks;
      var {isDisplayForm} = this.state;
      var elemTaskForm = isDisplayForm === true ? <TaskForm onSubmit={this.onSubmit} turnOffForm={ this.turnOffForm } /> : '';
         return(          
            <div className="container">
                <div className="text-center">
                    <h1>Quan ly cong viec</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
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
                       {elemTaskForm}

                    </div>
                    <div className={ isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-13"}>
                        <button type="button" className="btn btn-primary" onClick={ this.onToggleForm }>
                            <span className="glyphicon glyphicon-plus"></span> Add task
                        </button>&nbsp;&nbsp; 


                        <button type="button" className="btn btn-danger" onClick = {this.onGenerateData}>
                            <span className="glyphicon glyphicon-plus"></span> Generate Data
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
                            <TaskList listTask={tasks} />
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}

export default App;
  