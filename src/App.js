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
         taskEditing: null,
         filter: {
            name: '',
            status : -1,
         },
         keyword: '',
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

   //khi mo cai form len roi van nhan dc cai props
   // componentWillReceiveProps(nextProps){ 
   //    console.log(nextProps);
   // }

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
      //kiem tra xem isDisPlay dang mo va taskEditing co du lieu
      if (this.state.isDisplayForm === true && this.state.taskEditing) {
         this.setState({
         isDisplayForm: true,
         taskEditing: null, //de form se tro thanh form them
       });
      }else{
            this.setState({
            isDisplayForm: !this.state.isDisplayForm ,
            taskEditing: null, //de form se tro thanh form them
         });
      }
       
   }

   turnOffForm = ()=>{

      this.setState({
         isDisplayForm: false,
      });
   }

   onSubmit =(data)=>{
      
      var {tasks} = this.state;
      
      if (data.id !== '') {
         var index = this.findIndex(data.id);
         console.log(index);
         tasks[index] = data;
      }else{
         data.id = this.generateID();
         tasks.push(data);
      }
      this.setState({
            tasks : tasks,
            taskEditing: null,
      });
      
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.onToggleForm();
   }

   onUpdateStatus =(id)=>{
      var {tasks} = this.state;
      var index = this.findIndex(id); // tim vi tri thang can cap nhat
      console.log(id);
      // neu tim thay
      if (index !== -1) {
         //ta cap nhat lai
         tasks[index].status = !tasks[index].status;
         this.setState({
            tasks: tasks,  
         });
         localStorage.setItem('tasks', JSON.stringify(tasks));
      }
   }

   //tim kiem den den phan tu co chua id do
   findIndex =(id)=>{
      // console.log(id);
      var {tasks} = this.state;
      var result = -1;
      tasks.forEach((task, index) =>{
         //tim id
         if (task.id === id) {
            // console.log(index);
            result = index;
         }
         
      });
       // ko tim thay
       return result;
   }
   onDeleteItem =(id)=>{
      var {tasks} = this.state;
      var index = this.findIndex(id);

      if (index !==1) {
         // splice co 2 tham so, vi tri-so luong. 
         tasks.splice(index, 1);
         this.setState({
            tasks : tasks,
         });
         localStorage.setItem('tasks', JSON.stringify(tasks));
         this.turnOffForm();
      }  
   }
   onShowForm =()=>{
      this.setState({
         isDisplayForm: true,//!this.state.isDisplayForm,
      })
   }
   onUpdate =(id)=>{
      //console.log(id);
      var {tasks} = this.state;
      var index = this.findIndex(id);
      var taskEditing = tasks[index];
      // console.log(taskEditing);
      // this.setState({
      //    taskEditing : taskEditing, //ta se co dc task dang cap nhat
      // })
      this.setState({
         taskEditing: taskEditing,
      })
      //console.log(this.state.taskEditing);
      this.onShowForm();

   }
   onFilter = (filterName, filterStatus)=>{
      //console.log(filterName, '-', filterStatus);
      filterStatus = parseInt(filterStatus, 10);// status dang la string ta ep ve kieu int
      //console.log(typeof filterStatus);
      this.setState({
         filter: {
            name: filterName.toLowerCase(),
            status: filterStatus,
         }
      });
   }

   onSearch =(keyword)=>{
      // console.log(keyword);
      this.setState({
         keyword: keyword,
      });
      // console.log(this.state.keyword);
   }

   render(){
      //var tasks = this.state.tasks;
      var {tasks,isDisplayForm, taskEditing, filter, keyword} = this.state;
      // tim kiem datatable
      if (filter) {// tim kiem theo ten
        if (filter.name) {
            tasks = tasks.filter((task) =>{
                //toLoweCase  chuyen ve chu thuong, indexOf kiem tra xem chuoi filter.name co hay ko neu filter.name = -1 ko tim  thay
                return task.name.toLowerCase().indexOf(filter.name) !== -1;
            });
         }
         tasks = tasks.filter((task)=>{// tim kiem theo status
            if(filter.status === -1){
               return task;
            }
            else{
               return task.status === (filter.status ===1 ? true : false);
            }
         });
      }
      //chuc nang Search
      if (keyword) {
          tasks = tasks.filter((task) =>{
            //toLoweCase  chuyen ve chu thuong, indexOf kiem tra xem chuoi filter.name co hay ko neu keyword = -1 ko tim  thay
            return task.name.toLowerCase().indexOf(keyword) !== -1;
         });
      }

      var elemTaskForm = isDisplayForm === true ? <TaskForm task={taskEditing} onSubmit={this.onSubmit} turnOffForm={ this.turnOffForm } /> : '';
         // console.log(filter);
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
                        <Control onSearch={this.onSearch} />

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
                            <TaskList onFilter={this.onFilter} onUpdate={this.onUpdate} onDeleteItem={this.onDeleteItem} listTask={tasks} onUpdateStatus={this.onUpdateStatus}/>
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}

export default App;
  