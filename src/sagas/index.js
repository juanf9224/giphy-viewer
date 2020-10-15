import { all } from "redux-saga/effects";
import { watchGetGifs } from "./getGifs";

export default function* rootSaga() {
  yield all([watchGetGifs()]);
}
