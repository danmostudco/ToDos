import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';
import ListPicker from './components/ListPicker'
import './index.css';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={ListPicker} />
				<Match pattern="/:listId" component={App} />
			</div>
		</BrowserRouter>
	)
}

render(
  <Root />,
  document.getElementById('root')
);
