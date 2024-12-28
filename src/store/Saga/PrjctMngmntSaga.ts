import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { prjtMngmntAxios } from "../axios/PrjtMngmntAxiosApi";
import { message } from "antd";
import AppConstants from "../../Globals/AppConstants";

function* errorSaga(error: any) {
    yield put({
        type: AppConstants.API_USER_ERROR,
        error: error,
        status: error.status,
    });

    message.config({
        duration: 1.5,
        maxCount: 1,
    });
    message.error(AppConstants.somethingWentWrong);
}

export function* loginSaga(action: any): SagaIterator {
    try {
        const response = yield call(prjtMngmntAxios.getList, action.payload);
        console.log("response==>0", response);
        if (response.result == 1)
            yield put({
                type: "Appconstantsuccess",
                result: response.result,
                status: response.status
            })

    } catch (error) {
        yield call(errorSaga, error);
    }

}