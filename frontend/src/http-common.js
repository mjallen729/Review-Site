import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:5100/api/v1/restaurants',
	headers: {
		'Content-type': 'application/json'
	}
});