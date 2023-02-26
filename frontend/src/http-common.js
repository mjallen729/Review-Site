import axios from 'axios';

export default axios.create({
	baseURL: 'https://review-site-bn8x.onrender.com/api/v1/restaurants',
	headers: {
		'Content-type': 'application/json'
	}
});