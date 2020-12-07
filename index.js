"use strict";
const fetch = require('node-fetch');
let api_key, url, data, json;
exports.fetch = async(api_key) => {
	url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
	data = await fetch(url);
	json = await data.json();

	data = json;
	return await data;
};
