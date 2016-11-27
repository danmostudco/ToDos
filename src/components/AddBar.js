import React from 'react';

class AddBar extends React.Component {

	createToDo(event){
		event.preventDefault();

		const toDo = {
			title: this.title.value,
			complete: false
		}
		this.props.addToDo(toDo);
		this.inputToDo.reset();

	}

	render() {
		return (
			<div>
				<form className="inputForm" ref={(input => this.inputToDo = input)} onSubmit={(e) => this.createToDo(e)}>
		          <div className="row">
		            <div className="column column-75">
						<input id="AddBar" ref={(input) => this.title = input} type="text" placeholder="what do you need to do next?"></input>
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