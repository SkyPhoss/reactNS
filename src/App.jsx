import { useCallback, useState } from 'react'
import Login from './components/login/login'
import './App.css'
import CommentsPage from "./Pages/CommentsPage"
import CategoryPage from './Pages/category/CategoryPage'

const categories = ['test' ,'test1' , 'test2', 'test3']

function App() {
  const [display, setDisplay] = useState('category')
  const [login, setLogin] = useState('')

  const getLogin = useCallback((login) => {
    setLogin(login)
    setDisplay('category')
  })

  const changeDisplay = useCallback((newDisplay) => {
    setDisplay(newDisplay)
  })

  return display === 'login'? (
    <>
      <Login onLogin={getLogin}/>
    </>
  ) : display === 'category'? (
    <>
      <CategoryPage categories={categories}/>
    </>
  ) : (
    <>
      <CommentsPage />
    </>
  )

 
}

export default App
