import classes from './category-page.module.css'
import Category from '../../components/category/category'

const categories = ['test' ,'test1' , 'test2', 'test3']

const CategoryPage = ({onCat}) => {

  const categoriesMap = categories.map(cat => {
    return <Category key={cat} category={cat} onCat={onCat} />
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