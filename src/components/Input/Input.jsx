import React from 'react';
import cn from 'classnames';
import cl from './Input.module.scss';

const Input = ({ className, ...otherProps }) => {
	const classes = cn(cl.input, className);

	return (
		<input type="text" className={classes} {...otherProps} />
	);
}

export default Input;