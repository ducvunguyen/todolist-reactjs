import React, {Component} from 'react';

class Sort extends Component {
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
                <li>
                    <a role="button" className="sort_selected">
                        <span className="glyphicon glyphicon-sort-by-alphabet">
                            A-Z
                        </span>
                    </a>
                </li>
              <li>
                  <a role="button" className="sort_selected">
                      <span className="glyphicon glyphicon-sort-by-alphabet">
                          A-Z
                      </span>
                  </a>
              </li>
              
            </ul>
          </div>

      </div>
		);
	}
}
export default Sort;