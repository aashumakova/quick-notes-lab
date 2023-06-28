import { useState } from 'react';
import { createNote } from "../../utilities/notes-api"

export default function NewNoteForm({ user, addNote, handleAddNote }) {
    const [newNote, setNewNote] = useState({ text: '' });
    
    // async function handleAddNote(note) {
    //     try {
    //         const responce = await createNote(note)
    //         setNewNote([responce.newNote, ...newNote])
    //     } catch (error) {
    //         console.log('error in handleAddNote')
    //     }
    // }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const noteData = new FormData()
        noteData.append('text', newNote.text)
        handleAddNote(noteData) 
    }
    async function handleAddNote(evt) {
        evt.preventDefault();
        try {
            const createdNote = await createNote({
              text: newNote.text,
              user: user._id 
            });
            
            addNote(createdNote);
            setNewNote({ text: '' });
          } catch (error) {
            console.log(error);
          }
    }

    function handleChange(evt) {
        const newNoteChange = { ...newNote, [evt.target.name]: evt.target.value };
        console.log('new note chnage', newNoteChange)
        setNewNote(newNoteChange);
    }
    return (
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
            );
}


