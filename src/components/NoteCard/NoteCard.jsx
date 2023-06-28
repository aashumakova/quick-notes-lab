import NoteDelete from "../NoteDelete/NoteDelete"

export default function NoteCard({ note }) {
    return(
        <>
        <NoteDelete note={note} />
            <div>
                {note.text} 
            </div>
        </>
    )
}