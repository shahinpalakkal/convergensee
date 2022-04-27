// const baseUrl = "https://9f2486w05k.execute-api.us-west-2.amazonaws.com/prod/convergensee";
// const scanUrl = "https://9f2486w05k.execute-api.us-west-2.amazonaws.com/prod/convergensee";

const baseUrl = "https://9f2486w05k.execute-api.us-west-2.amazonaws.com/test/convergensee";
const scanUrl = "https://9f2486w05k.execute-api.us-west-2.amazonaws.com/test/convergensee";

export function apiCalling(requestCall) {
    return fetch(baseUrl, requestCall)
    .then((data) => data.json())
    .then((res) => res);
}

export function scanCalling(requestCall) {
    console.log("requestCall ",requestCall)
    return fetch(scanUrl, requestCall)
    .then((data) => data.json())
    .then((res) => res);
}
