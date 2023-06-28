import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { deleteNote } from '../../utilities/notes-api'

export default function NoteDelete({ user, note }) {
  const [notes, setNotes] = useState([]);
  const [delNote, setDelNote] = useState([]);
  const { noteId } = useParams();

  async function handleDelete(evt) {
    evt.preventDefault();
    handleDeleteNote(note)
  }

  async function handleDeleteNote(note) {
    try {
        const response = await deleteNote(note);
        setNotes([response.data, ...notes])
    } catch (error) {
      console.log('error in handleDeleteNote')
    }
  }

  function handleChange(evt) {
    const postDelNoteChange = { ...prevNote, [evt.target.name]: evt.target.value };
    console.log('post del note change', postDelNoteChange);
    setDelNote(postDelNoteChange);
  }

  useEffect(() => {
    fetchNotes();
    }, []);

  async function fetchNotes() {
    try {
      const response = await deleteNote();
      setNotes(response);
    } catch (error) {
      console.log(error);
    }
  }

    
    return (
        <div className="form-container">
                           
              <>Delete this note</>
              <button type="submit">Delete</button>
                    <form onSubmit={handleDelete}>
                    <label for="text">Text</label>
                    <input type="text" name="text" 
                    value={newNote.text} 
                    onChange={handleChange}/> 
                    <input type="submit" />              
                    
                  </form>
                </div>
    )
}