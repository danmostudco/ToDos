import React from 'react';

class ListPicker extends React.Component {

	render() {
		return (
	      <div className="container">
	        <div className="row">
	          <div className="column column-50 column-offset-25">
					<form className="inputForm" ref={(input => this.inputListName = input)} onSubmit={(e) => this.createToDo(e)}>
			          <div className="row">
			            <div className="column column-75">
							<input id="ListBar" ref={(input) => this.title = input} type="text" placeholder="what list do you need?"></input>
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

export default ListPicker;