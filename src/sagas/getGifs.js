import { put, takeLatest, call } from "redux-saga/effects";
import { searchGifs } from "../services/giphy.service";
import { getGifsSuccess, getGifsError } from '../actions/gifs';

export function* getGifs() {
  try {
    const gifsData = yield call(searchGifs);
    yield put(getGifsSuccess(gifsData));
  } catch (error) {
    yield put(getGifsError(error.toString()));
  }
}

export function* watchGetGifs() {
  yield takeLatest('GET_GIFS', getGifs);
}
