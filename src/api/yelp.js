import axios from 'axios';
// import keys from '../config';
// TODO import api key from a config file
export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer aLi1XWAqecWOhgUmT90zNYXwmmt4wLMcqe5t_vxGeoHLYsfxTLjAlzWneZhKchSeAJnFxpsBzFec75TmMScgROgt5fMDGLvPEW0RrMaldm2S5puaXQsXgY8x5lW2XXYx' // API key needed here..
	}
});
