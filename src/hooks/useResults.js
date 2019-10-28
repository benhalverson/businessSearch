import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [ results, setResults ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					term: searchTerm,
					limit: 50,
					location: 'San Jose'
				}
			});
			setResults(response.data.businesses);
		} catch (e) {
			setErrorMessage(`Something went wrong \n${e.message}`);
		}
  };
  
  // including this for a default search
  useEffect(() => {
    searchApi('Pasta');
  }, []);

  return [searchApi, results, errorMessage];
};