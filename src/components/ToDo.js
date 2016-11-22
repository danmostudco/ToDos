import React from 'react';

class ToDo extends React.Component {
	render() {

		var ToDoStyle = {
			  background: "#a165c6", /* Old browsers */
			  color: "white"
			}

		return (
			<div className="ToDo" style={ToDoStyle}>
			<p> Hello I'm a simple todo</p>
			</div>
		)
	}
};

export default ToDo;