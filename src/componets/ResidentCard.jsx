import { useEffect } from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import './ResidentCard.css';

function ResidentCard({ url }) {
	const { fetchingData, data: resident, loading } = useFetchApi();

	useEffect(() => {
		fetchingData(url);
	}, [url]);

	if (loading) return <p className='loading'>Loading...</p>;

  const TotalEpissodesNumber = resident?.episode?.length;
  
	const TotalEpissodesText =
		TotalEpissodesNumber === 1 ? 'eppisode' : 'eppisodes';

    const statusClass = resident?.status === 'Alive' ? 'alive' :
    resident?.status === 'Dead' ? 'dead' :
     'unknown';
	return (
		<div className='resident'>
			<div className='resident__image'>
				<img className='resident__img' src={resident?.image} alt={resident?.name} />
				<span className='resident_status'>
          <span className={`resident__${statusClass}`}/> 
          {resident?.status}
          </span>
			</div>
      <div className='resident_body'>

			<h2 className='resident_name'>{resident?.name}</h2>
      <div className='resident__content'>
        <p className="resident_item"> <b>Specie: </b>{resident?.species} </p>
        <p className="resident_item"> <b>Origin: </b>{resident?.origin?.name} </p>
        <p className="resident_item"> <b>Epissodes where appear:</b> {TotalEpissodesNumber} {TotalEpissodesText} </p>
      </div>
      </div>

		</div>
	);
}

export default ResidentCard;
