import React from 'react';

class ToDo extends React.Component {
	render() {

		var boxStyle = {
			  background: "#a165c6", /* Old browsers */
			  color: "white",
			  borderRadius: ".25em",
			  height: "75px",
			  marginBottom: "20px",
			  display: "flex",
			  alignItems: "center"
			}

			var buttonStyle = {
				color: "white",
				border: "white 1px solid",
				marginLeft: "1em"
			}

			var textStyle = {
				margin: "0 0 .3em .5em"
			}

			var deleteStyle = {
				margin: "0 0 .3em .5em",
				marginLeft: "auto",
				marginRight: "1em"
			}


		return (
			<div className="ToDoBox" style={boxStyle}>
					<button className="button-outline" style={buttonStyle}>Done</button>

					<p style={textStyle}>Go to the store and pickup some groceries</p>

					<a href="#" style={deleteStyle}>Delete</a>
			</div>
		)
	}
};

export default ToDo;