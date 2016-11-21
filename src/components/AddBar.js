import React from 'react';
import './AddBar.css';

class AddBar extends React.Component {
	render() {
		return (
			<form className="inputForm">
				<input id="AddBar" type="text" placeholder="what do you need to do next?"></input>
				<button>Add to the list</button>
			</form>
		)
	}
};

export default AddBar;