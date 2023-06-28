import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

//display notes for logged in user
export function indexNotes() {
    return sendRequest(`${BASE_URL}`)
}

// add new note
export function createNote(note) {
    return sendRequest(BASE_URL, 'POST', note);
}

// delete a note
export function deleteNote(noteId) {
    return sendRequest(BASE_URL, 'DELETE', noteId)
}


// export async function createNote(noteData) {
//     return sendRequest(BASE_URL, 'POST', noteData);
//     // Fetch uses an options object as a second arg
//     // to make requests other than GET, include data,
//     // set headers.
//     // const res = await fetch(BASE_URL, {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify(noteData)
//     // });
//     // Check if request was successful
//     // if (res.ok) {
//     //     // res.json() will resolve to the JWT
//     //     return res.json();
//     // } else {
//     //     throw new Error('Invalid Note');
//     // }
// }
// export async function getAll() {
//     return sendRequest(BASE_URL);
//   }
