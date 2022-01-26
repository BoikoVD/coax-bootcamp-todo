import React from 'react';
import cl from './ListHeader.module.scss';
import { format, startOfWeek, endOfWeek } from 'date-fns';

class ListHeader extends React.Component {

	state = {
		currentDate: new Date()
	}

	render() {
		const startOfCurrentWeek = format(startOfWeek(this.state.currentDate), 'dd');
		const endOfCurrentWeek = format(endOfWeek(this.state.currentDate), 'dd');
		const month = format(this.state.currentDate, 'MMM');
		const year = format(this.state.currentDate, 'yyyy');

		return (
			<div className={cl.listHeader}>
				{month + ' ' + startOfCurrentWeek + ' - ' + endOfCurrentWeek + ', ' + year}
			</div>
		);
	}
}

export default ListHeader;