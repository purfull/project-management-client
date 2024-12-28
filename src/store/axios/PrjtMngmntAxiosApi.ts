import { message } from "antd";
import http from "./PrjtMngmntHttps";


let prjtMngmntAxios = {
    getList(payload: any) {
        return Method.dataPost(payload, "http://localhost:8094/api/login")
    },
};

const Method = {
    async dataPost(body: any, url: any) {
        return await new Promise((resolve, reject) => {
            http.post(url, {
                query: body,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'access-control-allow-origin': '*',
                    // 'Authorization': localStorage.authToken
                }
            }).then((result) => {
                if (result.status === 200) {
                    return resolve({
                        status: 1,
                        result: result,
                    });
                } else if (result.status == 212) {
                    return resolve({
                        status: 4,
                        result: result,
                    });
                } else {
                    if (result) {
                        return reject({
                            status: 3,
                            error: "Something went wrong.",
                        });
                    } else {
                        return reject({
                            status: 4,
                            error: "Something went wrong.",
                        });
                    }
                }
            }).catch((err) => {
                if (err.response) {
                    if (
                        err.response.status !== null &&
                        err.response.status !== undefined
                    ) {
                        if (err.response.status == 401) {
                            let unauthorizedStatus = err.response.status;
                            if (unauthorizedStatus == 401) {
                                message.error("401 unauthorized");
                            }
                        } else {
                            return reject({
                                status: 5,
                                error: err,
                            });
                        }
                    }
                } else {
                    return reject({
                        status: 5,
                        error: err,
                    });
                }
            });
        });
    }
}

export { prjtMngmntAxios };