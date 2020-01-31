import React, {Component} from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: '',
    };
  }
  onChange =(event)=>{
    var target = event.target;
    var name = target. name;
    var value = target. value;

    this.setState({
      [name]: value,
    });
    // console.log(this.state.keyword);
  }
  onSearch =()=>{
    // console.log(this.state.keyword);
    var {keyword} = this.state;
    this.props.onSearch(keyword);
  }
	render(){
		return(
			<div className="input-group">
          <input 
            type="text" 
            name="keyword"
            className="form-control"
            placeholder="Nhap tu khoa......"
            value={this.state.keyword}
            onChange={this.onChange}/>
            <span className="input-group-btn"> 
                <button onClick={this.onSearch} type="button" className="btn btn-primary">
                <span className="glyphicon glyphicon-search"></span></button>
            </span>
      </div>
		);
	}
}
export default Search;