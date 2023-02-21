import Comments from "../components/comments/Comments"
import "../assets/css/CommentsPage.css"
import { useState } from "react"

const CommentsPage = ( {getLogin} ) => {
    const [comments, setComments] = useState([{ msg: "loremIpsum hezaoheozaheolzae  ljzah eljza helza hela e", author: "Sylsins", date: new Date() },
    { msg: "loremIpsum hezaoheozaheolzae  zr  riageraera uhruza gerav", author: "Ryan", date: new Date() },
    { msg: "loremIpsum hezaoheozaheolzae  ge  age eiuhzae  uhza", author: "Nicolas", date: new Date() },
    { msg: "loremIpsum ezr  rkez rkez rz  ", author: "Guillaume", date: new Date() }])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.comment.value);
    }
    const handleClick = (e) => {
        getLogin()
    }
    

    return (
        <div className="CommentsPage">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="comments-header">
                    <h3>React JS</h3>
                    <button onClick={handleClick}>Retour</button>
                </div>

                {comments.map((comment, i) => {
                    return <Comments comment={comment} />
                })}

                <textarea name="comment" />
                <button>Envoyer</button>
            </form>
        </div>
    )
}

export default CommentsPage