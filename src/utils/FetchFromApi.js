import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPID_KEY,
		
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
	}
};

export const FetchFromApi = async (url) => {
	try {
		const { data } = await axios.get(`${BASE_URL}/${url}`,options)
		return data;
		
	} catch (error) {
		console.log("error fetcing the data from api", error)
		return null

	}
}