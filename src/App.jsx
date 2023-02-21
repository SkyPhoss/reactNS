import { useCallback, useState } from 'react'
import Login from './components/login/login'
import './App.css'
import CommentsPage from "./Pages/CommentsPage"
import CategoryPage from './Pages/category/CategoryPage'


function App() {
  const [display, setDisplay] = useState('category')
  const [login, setLogin] = useState('')
  const [category, setCategory] = useState('')

  const getLogin = useCallback((login) => {
    setLogin(login)
    setDisplay('category')
  })

  const getCategory = useCallback((cat) => {
    setCategory(cat)
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
  ) : (
    <>
      <CommentsPage />
    </>
  )

 
}

export default App
