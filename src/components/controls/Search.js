import React, {Component} from 'react';

class Search extends Component {
	render(){
		return(
			<div className="input-group">
          <input 
            type="text" 
            name="keyword"
            className="form-control"
            placeholder="Nhap tu khoa"/>
      </div>
		);
	}
}
export default Search;