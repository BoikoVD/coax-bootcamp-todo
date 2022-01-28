import React from 'react';
import cl from './Input.module.scss';
import cn from 'classnames';

const Input = (props) => {

	const { className, ...otherProps } = props;

	const classes = cn(cl.input, className);

	return (
		<input type="text" className={classes} {...otherProps} />
	);
}

export default Input;