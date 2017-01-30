import React from 'react';
import render from 'react-dom';

class Header extends React.Component {
	constructor() {
		super();
		let month = new Date().getMonth();
		let bodyClass = '';

		if (month == 11 || month <= 1) {
			bodyClass = 'night winter';
		}
	}

	render() {
		return (
			<header class={bodyClass}>
        asdasdasd
    	</header>
		);
  }
}

export default Header;
//render(<Header />, document.getElementById('header'));