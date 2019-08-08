const initialState = {
	data: [],
	dataMapById: {},
	loading: false
};

export const ACTION_TYPE = {
	HTTP_REQUEST: 'HTTP_REQUEST',
	SEARCH_MOVIE: 'SEARCH_MOVIE',
	SEARCH_MOVIE_SUCCEEDED: 'SEARCH_MOVIE_SUCCEEDED',
	SEARCH_MOVIE_FAILED: 'SEARCH_MOVIE_FAILED',
	SINGLE_MOVIE: 'SINGLE_MOVIE',
	SINGLE_MOVIE_SUCCEEDED: 'SINGLE_MOVIE_SUCCEEDED',
	SINGLE_MOVIE_FAILED: 'SINGLE_MOVIE_FAILED'
};

export default function movie(state = initialState, action) {
	if(action.type === ACTION_TYPE.HTTP_REQUEST) {
		return {
			...state,
			loading: true
		};
	} else if(action.type === ACTION_TYPE.SEARCH_MOVIE_SUCCEEDED) {
		const { data } = action.payload;
		const _data = data.map((d) => d.show);
		const dataMapById = _data.reduce((acc, movie) => {
			acc[movie.id] = movie;
			return acc;
		}, {});
		return {
			...state,
			data: _data,
			dataMapById,
			loading: false
		};
	} else if(action.type === ACTION_TYPE.SEARCH_MOVIE_FAILED) {
		return state;
	} else if(action.type === ACTION_TYPE.SINGLE_MOVIE_SUCCEEDED) {
		const { data } = action.payload;
		return {
			...state,
			data: [...state.data, data],
			dataMapById: {
				[data.id]: data
			},
			loading: false
		};
	} else if(action.type === ACTION_TYPE.SINGLE_MOVIE_FAILED) {
		return state;
	} else {
		return state;
	}
}