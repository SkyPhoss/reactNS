import classes from './category.module.css'

const Category = ({category, onCat}) => {

  return (
    <li className={classes.cat} onClick={() => onCat(category.id)}>
        <div>
            <p>{category.name}</p>
            <p>{category.count} commentaires</p>
        </div>
        <div>
          <p>Dernier commentaire à: {new Date(category.lastUpdate).toLocaleTimeString()}</p>
          <img src={"http://localhost:8080/"+category.icon} alt="" />
        </div>
    </li>
  )
}

export default Category