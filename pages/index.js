import { getFeaturedEvents } from '../dummy-data'

export default function HomePage() {
	const featuredEvents = getFeaturedEvents()

	return (
		<div>
			<h1>Home page</h1>
		</div>
	)
}
