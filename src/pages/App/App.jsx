import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NotesPage from '../NotesPage/NotesPage'
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service'


export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/notes" element={<NotesPage user={user}/>} />
              <Route path="/new" element={<NewNoteForm user={user} setUser={setUser}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
