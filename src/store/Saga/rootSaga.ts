
import { takeEvery } from "redux-saga/effects";
import { loginSaga } from "./PrjctMngmntSaga";
export function* rootSaga() {
    yield takeEvery("loginLoad", loginSaga);
}