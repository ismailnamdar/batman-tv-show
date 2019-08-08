import { call, put, takeEvery } from 'redux-saga/effects'
import { API_BASE_URL } from '../../configs/constants'
import axios from 'axios';

const _axios = axios.create({
	baseURL: API_BASE_URL,
	timeout: 60000,
	responseType: 'json'
});
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetch(action) {
	const { method, params, path, type } = action.payload;
	try {
		const { data } = yield call(_axios,  {
			method,
			params,
			url: path,
		});
		yield put({type: type + "_SUCCEEDED", payload: { data }});
	} catch (e) {
		yield put({type: type + "_FAILED", payload: {message: e.message}});
	}
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watcher() {
	yield takeEvery("HTTP_REQUEST", fetch);
}

export default watcher;