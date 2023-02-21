import classes from './category-page.module.css'
import Category from '../../components/category/category'

const CategoryPage = ({categories}) => {

  const categoriesMap = categories.map(cat => {
    return <Category category={cat} />
  })

  return (
    <div className={classes.category}>
      <ul>
        {categoriesMap}
      </ul>
    </div>
  )
}

export default CategoryPage