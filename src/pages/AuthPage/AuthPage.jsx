import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from 'react'

export default function AuthPage({ setUser}) {
  const [userPref, setUserPref] = useState('signup')
  function handlePref() {
    if( userPref === 'signup') {
      setUserPref('login')
    } else {
      setUserPref('signup')
    }
  }
  return (
    <div>
    <h1>AuthPage</h1>
    { userPref === 'signup' ? <SignUpForm setUser={setUser}/> : <LoginForm setUser={setUser}/>}
    <button onClick={handlePref}>
      { userPref === 'signup' ? 'Already a memeber? Log In' : 'Need an account? Sign Up'}
    </button>
    </div>
  );
}