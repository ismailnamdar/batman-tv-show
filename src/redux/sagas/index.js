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
	try {
		const { method, params, path } = action.payload;
		const { data } = yield call(_axios,  {
			method,
			params,
			url: path,
		});
		yield put({type: "FETCH_SUCCEEDED", payload: { data }});
	} catch (e) {
		yield put({type: "FETCH_FAILED", payload: {message: e.message}});
	}
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watcher() {
	yield takeEvery("FETCH_REQUESTED", fetch);
}

export default watcher;