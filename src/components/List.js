import React from 'react';
import ToDo from './ToDo'

class UpcomingList extends React.Component {

	constructor() {
		super();
		this.renderToDo = this.renderToDo.bind(this);
	}

	renderToDo(key) {
		const details = this.props.todos[key];
		const listComplete = this.props.listComplete;
		// this will be true for ToDo and false for Completed
		// then below, depending on the listComplete setting, correct type will be rendered
		if (details.complete === listComplete)
			{
				return (
					<ToDo
						key={key}
						index={key}
						details={details}
						toggleToDo={this.props.toggleToDo}
						removeToDo={this.props.removeToDo}
					/>
				)
			}
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