const API_KEY = 'f8d3320331781f06af992a4baca9fdf2';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';


const getData = (url) => {
	return fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw `Что-то пошло не так, ошибка ${response.status}`;
		})
		.catch((err) => console.error(err));
};

export const getTrends = (type = 'all', period = 'week', page = 1) => {
	const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
	return getData(url);
};

export const getTop = async (type, page = 1) => {
	const url = new URL(`${type}/top_rated`, BASE_URL);
	url.search = `api_key=${API_KEY}${LANGUAGE}&page=${page}`;

	return await getData(url);
};

export const getPopular = async (type, page = 1) => {
	const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
	return await getData(url);
};

export const getVideo = async (id, type) => {
	const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANGUAGE}`;
	return await getData(url);
};

export const search = async (query, page = 1) => {
	const url =
		`${BASE_URL}search/multi?api_key=${API_KEY}${LANGUAGE}` +
		`&page=${page}&query=${query}&include_adult=false&include_image_language=en,null`;
	return await getData(url);
};

