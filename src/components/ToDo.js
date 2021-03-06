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
				margin: "0 0 .3em 1.25em"
			}

		var deleteStyle = {
				color: "#5c3872",
				marginLeft: "auto",
				marginRight: "2em"
			}

		const label = !this.props.details.complete ? "Done" : "Undo"

		return (
			<div className="ToDoBox" style={boxStyle}>
					<button className="button-outline" style={buttonStyle} onClick={ () => this.props.toggleToDo(this.props.index) }>{label}</button>

					<p style={textStyle}>{this.props.details.title}</p>

					<a href="#" onClick={ () => this.props.removeToDo(this.props.index) } style={deleteStyle}>Delete</a>
			</div>
		)
	}
};

export default ToDo;