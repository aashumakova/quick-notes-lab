// to import all named exports we use the syntax
import * as usersApi from './users-api'

export async function signUp(userData) {
    // delegates the network request code to the uses-api.js API module
    // which will return a JSON web Token
    const token = await usersApi.signUp(userData)
    // we will return the token we have received from the api
    localStorage.setItem('token', token);
    return getUser()
}

export async function login(credentials) {
    try {
        const token = await usersApi.login(credentials)
        localStorage.setItem('token', token)
        return getUser()
    } catch {
        throw new Error('Bad Credentials')
  }
}

//getTokenfunction assesses the token in local storage
export function getToken() {
    // this return null if there is no string
    const token=localStorage.getItem('token')
    if (!token) return null
    // obtain payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]))
    // a JWT expiration is expressed in milliseconds
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        return null
    }

    return token
}
// get User function
export function getUser() {
    const token = getToken()
    // if there is a token, return the user and the payload
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

// log out function. deletes toke nfrom our local storage

export function logOut() {
    localStorage.removeItem('token')
}

export function checkToken() {
    // we can't forget to use .then with promises
    return usersApi.checkToken()
        .then(dateStr => new Date(dateStr));
    
}