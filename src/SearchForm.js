import React from 'react';

import './css/searchForm.css';
import actions from './actions';

function SearchForm() {
	return (
		<header>
			<form onSubmit={actions.componentDidMount}>
				<input type="text" id="inputSearch"
					placeholder="Поиск видео" onChange={actions.getInfoInput} />
				<button type="submit" id="btnSearch"></button>
			</form>
		</header>
	)
}

export default SearchForm;

{/* https://learn-reactjs.ru/basics/forms */ }