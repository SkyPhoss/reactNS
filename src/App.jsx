import { useCallback, useState } from 'react'
import Login from './components/login/login'
import './App.css'

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
    </>
  )

 
}

export default App
