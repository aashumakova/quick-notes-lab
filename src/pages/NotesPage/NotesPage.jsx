// import * as notesApi from '../../utilities/notes-api';
import { useState, useEffect } from 'react';
import { indexNotes } from '../../utilities/notes-api';
import { createNote } from '../../utilities/notes-api';
//import NotesPageItem from '../NotesPageItem/NotesPageItem';
import NoteCard from '../../components/NoteCard/NoteCard'
//import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'; 

export default function NotesPage({ user }) {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ text: '' });
  
    async function handleSubmit(evt) {
        evt.preventDefault();
        //const noteData = new FormData()
        //noteData.append('text', newNote.text)
        console.log('note data', newNote)
        handleAddNote(newNote) 
    }

    async function handleAddNote(newNote) {
        try {
            const response = await createNote(newNote)
            console.log(response, 'response')
            setNotes([response.data, ...notes])
        } catch (error) {
            console.log('error in handleAddNote')
        }
    }

    function handleChange(evt) {
        const newNoteChange = { ...newNote, [evt.target.name]: evt.target.value };
        console.log('new note chnage', newNoteChange)
        setNewNote(newNoteChange);
    }

    useEffect(() => {
        fetchNotes();
      }, []);
  
    async function fetchNotes() {
      try {
        const response = await indexNotes();
        setNotes(response);
      } catch (error) {
        console.log(error);
      }
    }

    let notesPageItemsJsx = null; 
    if (notes.length > 0 ) {
      notesPageItemsJsx = notes.map((note) => (
        <NoteCard note={note} key={note?._id} fetchNotes={fetchNotes} />
  
      ))
    }
     

    return (
        <>
        {notes.length === 0 ? (
            <p>No notes available</p>
          ) : (
            <ul>
            {notesPageItemsJsx}  
            </ul>
            )
        }
        <div className="new-note-form">
          <div>
              <div className="form-container">
              <h2>New Note</h2>
                  <form onSubmit={handleSubmit}>
                    <label for="text">Text</label>
                    <input type="text" name="text" 
                    value={newNote.text} 
                    onChange={handleChange} 
                    autoComplete="off" 
                    required />
                    
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
              </div>
    </>
    );
}


    // async function handleAddNote(note) {
    //     try {
    //         const response = await createNote(note)
    //         console.log(response, 'response')
    //         setNotes([response.data, ...notes])
    //     } catch (error) {
    //         console.log('error in handleAddNote')
    //     }
    // }
    // function handleAddNote(newNote) {
    //     setNotes([newNote, ...notes]);
    //   }
    // const notesPageItemsJsx = notes.map((note, idx) => (
    //     <NotesPageItem noteItem={note} key={idx} index={idx} />
    // ))
//     return (
//       <div className="notes-page">
//         <h1>Notes Page</h1>
//         <NewNoteForm user={user} handleAddNote={handleAddNote} note={note} />
//         {/* {notes.length === 0 ? (
//           <p>No notes available</p>
//         ) : (
//           <ul>
//             {notesPageItemsJsx} */}
//             {/* {notes.map((note) => (
//               <li key={note._id}>{note.text}</li>
//             ))} */}
//           </ul>
//         )}
//       </div>
//     );
//   }


// // export default function NotesPage({ user }) {
// //     const [note, setNote] = useState([]);
// //     async function handleAddNote(note) {
// //         try { 
// //             const response = await notesApi.createNote(note);
// //             setNote([response.note, ...note])
// //         } catch (err) {
// //             console.log(err, 'error in handleAddNote');
// //         }
// //     }
// //     return (
// //         <>
// //             <h1>Notes Page</h1>
// //                 <NewNoteForm handleAddNote={handleAddNote}/>
// //          </>   
// //     )
// // }

// // import React, { useState, useEffect } from 'react';
// // // import Note from '../../models/note.js'; // Path to the file where you defined your schema
// // import { createNote } from "../../utilities/notes-api";

// // export default function NotesPage({ user }) {

// //     const [note, setNote] = useState([]);

// //     useEffect(() => {
// //         Fetch the data when the component mounts
// //         Note.find()
// //             .then((result) => {
// //                 setNote(result);
// //             })
// //             .catch((error) => {
// //                 console.error('Error retrieving data', error);
// //             });
// //     }, []);

// //     return (
// //         <>
// //             <h1>Notes Page</h1>
// //             <div className="notes-container">
        
// //             </div>
// //         </>
// //     );
// // }