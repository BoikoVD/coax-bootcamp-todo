import React from 'react';
import cl from './ListHeader.module.scss';
import { format, startOfWeek, endOfWeek } from 'date-fns';

const ListHeader = () => {
	let [currentDate, setCurrentDate] = React.useState(new Date());

	const startOfCurrentWeek = format(startOfWeek(currentDate), 'dd');
	const endOfCurrentWeek = format(endOfWeek(currentDate), 'dd');
	const month = format(currentDate, 'MMM');
	const year = format(currentDate, 'yyyy');

	return (
		<div className={cl.listHeader}>
			{month + ' ' + startOfCurrentWeek + ' - ' + endOfCurrentWeek + ', ' + year}
		</div>
	);
}

export default ListHeader;