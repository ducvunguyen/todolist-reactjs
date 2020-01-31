import React, {Component} from 'react';
import Search from './controls/Search';
import Sort from './controls/Sort';

class Control extends Component {
	render(){
		return(
			<div className="row mt-15">
	            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	                {/*search*/}
	                {/*<div className="input-group">
	                    <input 
	                    type="text" 
	                    name="keyword"
	                    className="form-control"
	                    placeholder="Nhap tu khoa"/>
	                </div>*/}
	                <Search onSearch={this.props.onSearch} />
	            </div>
	            <Sort sortBy={this.props.sortBy} sortValue={this.props.sortValue} onSort={this.props.onSort} />
	        </div>
		);
	}
}
export default Control;