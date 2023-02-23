import Comments from "../components/comments/Comments"
import "../assets/css/CommentsPage.css"
import { useEffect, useState } from "react"

const CommentsPage = ( {changeDisplay, catId, author } ) => {
    const [comments, setComments] = useState([])
    const [message, setMessage] = useState("")

    /* [{ msg: "loremIpsum hezaoheozaheolzae  ljzah eljza helza hela e", author: "Sylsins", date: new Date() },
    { msg: "loremIpsum hezaoheozaheolzae  zr  riageraera uhruza gerav", author: "Ryan", date: new Date() },
    { msg: "loremIpsum hezaoheozaheolzae  ge  age eiuhzae  uhza", author: "Nicolas", date: new Date() },
    { msg: "loremIpsum ezr  rkez rkez rz  ", author: "Guillaume", date: new Date() }] */

    const handleSubmit = (e) => {
        e.preventDefault()
        const opt = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({author, content: e.target.comment.value })
        }
        fetch('http://localhost:8080/api/subject/'+ catId  +'/message', opt)
        setComments('')
        setMessage('')
    }

    const handleClick = (e) => {
        changeDisplay("category")
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/subject/'+ catId +'/message')
        .then((response) => response.json())
        .then(data => setComments(data))
    },[comments])

    return (
        <div className="CommentsPage">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="comments-header">
                    <h3>React JS</h3>
                    <button onClick={handleClick}>Retour</button>
                </div>

                {comments ? comments.map((comment, i) => {
                    return <Comments comment={comment} />
                }) : ""}

                <textarea name="comment" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button>Envoyer</button>
            </form>
        </div>
    )
}

export default CommentsPage