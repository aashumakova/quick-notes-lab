import NoteDelete from "../NoteDelete/NoteDelete"
import { useState } from 'react'

export default function NoteCard({ note, fetchNotes }) {
    console.log(note, 'note')
    const [stateNote, setStateNote] = useState(note)
    return(
        <>
        <NoteDelete note={note} fetchNotes={fetchNotes} />
            <div>
                {stateNote?.text} 
            </div>
        </>
    )
}