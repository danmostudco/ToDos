import React from 'react';
import './AddBar.css';

class AddBar extends React.Component {
	render() {
		return (
			<div>
				<form className="inputForm">
		          <div className="row">
		            <div className="column column-75">
						<input id="AddBar" type="text" placeholder="what do you need to do next?"></input>
		            </div>
		            <div className="column column-25">
						<button>Add to the list</button>
		            </div>
		          </div>
				</form>
			</div>
		)
	}
};

export default AddBar;