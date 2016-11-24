import React from 'react';
import ToDo from './ToDo'

class UpcomingList extends React.Component {

	constructor() {
		super();
		this.renderToDo = this.renderToDo.bind(this);
	}

	renderToDo(key) {
		return (
			<ToDo key={key} details={this.props.todos[key]}/>
		)
	}

	render() {
		return (
			<div>
				{Object.keys(this.props.todos).map(this.renderToDo)}
			</div>
		)
	}
}

export default UpcomingList;