import React from 'react';

class ListPicker extends React.Component {

	goToList(event) {
		event.preventDefault();
		// first grab text from the box
		const listId = this.listInput.value;
		console.log(`Going to ${listId}`);
		this.context.router.transitionTo(`/${listId}`);
	}

	render() {
		return (
	      <div className="container">
	        <div className="row">
	          <div className="column column-50 column-offset-25">
					<form className="inputForm" onSubmit={this.goToList.bind(this)}>
			          <div className="row">
			            <div className="column column-75">
							<input id="ListBar" ref={(input) => this.listInput = input} type="text" placeholder="what list do you need?"></input>
			            </div>
			            <div className="column column-25">
							<button>Go to list</button>
			            </div>
			          </div>
					</form>
				</div>
			</div>
		  </div>
		)
	};
};

ListPicker.contextTypes = {
	router: React.PropTypes.object
}

export default ListPicker;