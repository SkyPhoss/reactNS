import classes from './category.module.css'

const comments = [{ msg: "loremIpsum hezaoheozaheolzae  ljzah eljza helza hela e", author: "Sylsins", date: new Date() },
{ msg: "loremIpsum hezaoheozaheolzae  zr  riageraera uhruza gerav", author: "Ryan", date: new Date() },
{ msg: "loremIpsum hezaoheozaheolzae  ge  age eiuhzae  uhza", author: "Nicolas", date: new Date() },
{ msg: "loremIpsum ezr  rkez rkez rz  ", author: "Guillaume", date: new Date() }]

const Category = ({category}) => {

  return (
    <li className={classes.cat}>
        <div>
            <p>{category}</p>
            <p>{comments.length} commentaires</p>
        </div>
        <p>Dernier commantaire à: {comments[comments.length-1].date.toLocaleTimeString()}</p>
    </li>
  )
}

export default Category