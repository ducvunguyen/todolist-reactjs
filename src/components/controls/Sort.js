import React, {Component} from 'react';

class Sort extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         sort: {
    //             by: 'name',
    //             value: 1,
    //         }
    //     };
    // }

    onClick =(sortBy, sortValue)=> {
        // var {sort} = this.state;
        // // console.log(sortBy, sortValue);
        // this.setState({
        //    sort:{
        //         by: sortBy,
        //         value: sortValue,
        //     }
        // });
        // this.props.onSort(sort);
        this.props.onSort(sortBy, sortValue);
    }

    Selected(){
        return <span className="glyphicon glyphicon-ok"></span>;
    }
	render(){
		return(
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          {/*sort*/}
          <div className="dropdown">
            <button 
              className="btn btn-primary dropdown-toggle" 
              type="button" id="dropdownMenu1" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="true">
                Sort <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li onClick={ ()=> this.onClick('name', 1) } >
                    <a role="button" className="sort_selected">
                        <span className="glyphicon glyphicon-sort-by-alphabet">
                            A-Z {this.props.sortBy === 'name' && this.props.sortValue=== 1 ? this.Selected(): ''}
                        </span>
                    </a>
                </li>
                <li onClick={ ()=> this.onClick('name', -1) } >
                    <a role="button" className="sort_selected">
                        <span className="glyphicon glyphicon-sort-by-alphabet">
                              Z-A {this.props.sortBy === 'name' && this.props.sortValue=== -1 ? this.Selected(): ''}
                        </span>
                    </a>
                </li>
                <li role="separator" className="divider"></li>
                <li onClick={ ()=> this.onClick('status', 1) }>
                    <a role="button" > Active {this.props.sortBy === 'status' && this.props.sortValue=== 1 ? this.Selected(): ''} </a>
                </li>
                <li onClick={ ()=>this.onClick('status', -1) }>
                    <a role="button"> Hidden {this.props.sortBy === 'status' && this.props.sortValue=== -1 ? this.Selected(): ''}</a>
              </li>
            </ul>
          </div>

      </div>
		);
	}
}
export default Sort;