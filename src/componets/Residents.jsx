import ResidentCard from './ResidentCard';
import './Residents.css';

function Residents({ residents }) {
	return (
		<>
			<div className='residents'>
				Residents
				<pre>
					{residents.map((resident) => (
						<ResidentCard key={resident} url={resident} />
					))}
				</pre>
			</div>

			{residents.length === 0 && <p className='not_found'>No Residents found</p>}
		</>
	);
}

export default Residents;
