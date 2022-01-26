import React from 'react';
import cl from './Button.module.scss';
import cn from 'classnames';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let classes = cn(cl.btn, this.props.className);

		return (
			<button className={classes} type={this.props.type}>
				{this.props.children}
			</button>
		);
	}
}

export default Button;