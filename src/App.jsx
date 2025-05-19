import { useEffect, useState } from 'react';
import { useFetchApi } from './hooks/useFetchApi';
import { getRandomLocationById } from './lib/utils';
import Location from './componets/Location';
import Residents from './componets/Residents';
import Search from './componets/Search';
import './App.css';
// Api RickAndMorty
const BASE_URL = 'https://rickandmortyapi.com/api/location/';
function App() {
	const { fetchingData, data: location, loading } = useFetchApi();
	const [LocationId, setLocationId] = useState(getRandomLocationById());

	useEffect(() => {
		fetchingData(`${BASE_URL} ${LocationId}`); // 1 al 126
	}, [LocationId]);
	return (
		<>
			<header className="header" />
			<main className="main">
				{/* Search Section*/}
				<section className="section">
					<div className="container">
						<Search onSearch={setLocationId} />
					</div>
				</section>
				{/* Location Section*/}
				<section className="section">
					<div className="container">
						{loading ? <h1>Loading...</h1> : <Location location={location} />}
					</div>
				</section>
				{/* Residents Section*/}
				<section className="section">
					<div className="container">
						{location && <Residents residents={location.residents} />}
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
