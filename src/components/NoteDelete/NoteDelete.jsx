import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { deleteNote } from '../../utilities/notes-api'

export default function NoteDelete({ user, note, fetchNotes }) {
  const [notes, setNotes] = useState([]);
  const [delNote, setDelNote] = useState([]);
  //const { noteId } = useParams();

  

  async function handleDelete(noteId) {
    console.log(noteId, 'note id')
    try {
        const response = await deleteNote(noteId);
        console.log(response.ok,'respons');
        setDelNote(response)
        fetchNotes()
        
    } catch (error) {
      console.log('error in handleDeleteNote', error)
    }
  }

  function handleChange(evt) {
    const postDelNoteChange = { ...delNote, [evt.target.name]: evt.target.value };
    console.log('post del note change', postDelNoteChange);
    setDelNote(postDelNoteChange);
  }

  //useEffect(() => {
    //fetchNotes();
    //}, []);

  //async function fetchNotes() {
    //try {
      //const response = await deleteNote();
      //setNotes(response);
    //} catch (error) {
      //console.log(error);
    //}
  //}
// 
    
    return (
        <div className="form-container">
                           
              <>Delete this note</>
              <button
              
              onClick={() =>
              handleDelete(note._id)}
              >Delete</button>
                    
                </div>
    )
}