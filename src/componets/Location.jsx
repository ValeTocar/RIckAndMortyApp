import './Location.css';
function Location({ location }) {
	if (!location) return null;

	const TotalResidentsNumber = location.residents.length;
	const TotalResidentsText =
		TotalResidentsNumber === 1 ? 'resident' : 'residents';

	return (
		<div className="location">
			<h2 className="location_name">{location.name}</h2>
			<div className="location_content">
				<h3 className="location_item"> <b>Type:</b> {location.type}</h3>
				<h3 className="location_item"> <b>Dimension:</b> {location.dimension}</h3>
				<h3 className="location_item">
					<b>Residents:</b> {TotalResidentsNumber} {TotalResidentsText}{' '}
				</h3>
			</div>
		</div>
	);
}

export default Location;
