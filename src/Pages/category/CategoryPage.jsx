import classes from './category-page.module.css'
import Category from '../../components/category/category'
import { useEffect, useState } from 'react'


const CategoryPage = ({onCat}) => {
  const [categories, setCategories] = useState([])
  const [isLoading, SetLoading] = useState(true)
  const [err, setErr] = useState('')

  const url = 'http://localhost:8080/api/subject/category'

  useEffect(() => {
    fetch(url)
      .then((response) => {
        response.json()
        .then((data) => {
          setCategories(data)
        })
        .catch((err) => {
          setErr(err.message)
        })
      })
      .catch((err) => {
        setErr(err.message)
      })
      .finally(() => {
        SetLoading(false)
      })
  },[])

  const categoriesMap = categories?.map(cat => {
    return <Category key={cat.id} category={cat} onCat={onCat} />
  })

  return isLoading? (
    <div className={classes.category}>
      Loading...
    </div>
  ) : !err ?(
    <div className={classes.category}>
      <ul>
        {categoriesMap}
      </ul>
    </div>
  ) : (
    <div>
      {err}
    </div>
  )
}

export default CategoryPage