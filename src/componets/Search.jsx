import { useRef, useState } from 'react';
import './Search.css';

function Search({ onSearch }) {
	const inputRef = useRef(null);

	const [error, setError] = useState('');

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		const value = inputRef.current.value.trim();
		if (!value) {
			setError('Please enter a location ID');
			return;
		}
		if (value < 1 || value > 126) {
			setError('Please enter a valid location ID between 1 and 126');
			return;
		}
		setError('');
		onSearch(inputRef.current.value);
		inputRef.current.value = '';
	};

	return (
		
		<>
			
    <p className='form_input_value'>Search a location ID from the (1-126)</p>
			<div className='form_container'>
        
				<input
					type="number"
					min={0}
					placeholder="Search a location ID"
					ref={inputRef}
					onKeyDown={handleKeyDown}
          className='form_input'
				/>
				<button onClick={handleSubmit}className='form_button'>Search</button>
			</div>

			{error && <p className='error'>{error}</p>}
		</>
	);
}

export default Search;
