import sendRequest from "./send-request"
const BASE_URL = '/api/users'

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
    // const res = await fetch(BASE_URL, {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(userData)
    // })

    // // check that the request has been successful
    // if (res.ok) {
    //     return res.json()
    // } else {
    //     throw new Error('Invalid Sign Up')
    // }
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
    // const res = await fetch(`${BASE_URL}/login`, {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(credentials)
    // })

    // // check that the request has been successful
    // if (res.ok) {
    //     return res.json()
    // } else {
    //     throw new Error('Invalid Log In')
    // }
}

export async function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}