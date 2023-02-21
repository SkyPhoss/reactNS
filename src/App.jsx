import { useCallback, useState } from 'react'
import Login from './components/login/login'
import './App.css'
import CommentsPage from "./Pages/CommentsPage"

function App() {
  const [display, setDisplay] = useState('login')
  const [login, setLogin] = useState('')

  const getLogin = useCallback((login) => {
    setLogin(login)
    setDisplay('category')
  })

  return display === 'login'? (
    <>
      <Login onLogin={getLogin}/>
    </>
  ) : display === 'category'? (
    <>
      <p></p>
    </>
  ) : (
    <>
      <CommentsPage getLogin={getLogin}/>
    </>
  )

 
}

export default App
