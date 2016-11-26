import React from 'react';
import ToDo from './ToDo'

class UpcomingList extends React.Component {

	constructor() {
		super();
		this.renderToDo = this.renderToDo.bind(this);
	}

	renderToDo(key) {
		return (
			<ToDo
				key={key}
				index={key}
				details={this.props.todos[key]}
				completeToDo={this.props.completeToDo}
			/>
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