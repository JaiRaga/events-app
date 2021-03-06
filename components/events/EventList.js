import EventItem from './EventItem'

const EventList = (props) => {
	const { items } = props
	return (
		<ul>
			{items.map((event) => (
				<EventItem event={event} />
			))}
		</ul>
	)
}

export default EventList
