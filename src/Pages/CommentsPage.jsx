import Comments from "../components/comments/Comments"
import "../assets/css/CommentsPage.css"
import { useState } from "react"

const CommentsPage = () => {
    const [comments, setComments] = useState([{ msg: "loremIpsum hezaoheozaheolzae  ljzah eljza helza hela e", author: "Sylsins", date: new Date() },
    { msg: "loremIpsum hezaoheozaheolzae  zr  riageraera uhruza gerav", author: "Ryan", date: new Date() },
    { msg: "loremIpsum hezaoheozaheolzae  ge  age eiuhzae  uhza", author: "Nicolas", date: new Date() },
    { msg: "loremIpsum ezr  rkez rkez rz  ", author: "Guillaume", date: new Date() }])


    return (
        <div className="CommentsPage">
            <form action="">
                <div className="comments-header">
                    <h3>React JS</h3>
                    <button>Retour</button>
                </div>

                {comments.map((comment, i) => {
                    return <Comments comment={comment} />
                })}

                <textarea />
                <button>Envoyer</button>
            </form>
        </div>
    )
}

export default CommentsPage