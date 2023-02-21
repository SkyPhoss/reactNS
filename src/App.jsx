import { useCallback, useState } from 'react'
import Login from './components/login/login'
import './App.css'
import CommentsPage from "./Pages/CommentsPage"
import CategoryPage from './Pages/category/CategoryPage'


function App() {
  const [display, setDisplay] = useState('login')
  const [login, setLogin] = useState('')
  const [catId, setCatId] = useState('')

  const getLogin = useCallback((login) => {
    setLogin(login)
    setDisplay('category')
  })

  const getCategory = useCallback((catId) => {
    setCatId(catId)
    setDisplay('comments')
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
      <CategoryPage onCat={getCategory}/>
    </>
  ): (
    <>
      <CommentsPage catId={catId} author={login} changeDisplay={changeDisplay} />
    </>
  )
 
}

export default App
