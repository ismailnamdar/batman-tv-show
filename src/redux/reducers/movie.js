const initialState = {
	data: [],
	loading: false
};

export const ACTION_TYPE = {
	FETCH_REQUESTED: 'FETCH_REQUESTED',
	FETCH_SUCCEEDED: 'FETCH_SUCCEEDED',
	FETCH_FAILED: 'FETCH_FAILED'
};

export default function movie(state = initialState, action) {
	if(action.type === ACTION_TYPE.FETCH_REQUESTED) {
		return {
			...state,
			loading: true
		};
	} else if(action.type === ACTION_TYPE.FETCH_SUCCEEDED) {
		const { data } = action.payload;
		return {
			...state,
			data,
			loading: false
		};
	} else if(action.type === ACTION_TYPE.FETCH_FAILED) {
		return state;
	} else {
		return state;
	}
}