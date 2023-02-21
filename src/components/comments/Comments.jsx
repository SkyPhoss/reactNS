const Comments = ({ comment }) => {


    return (
        <>
            <div>
                <p>{comment.content}</p>
                <p>{comment.author}</p>
                <p>{new Date(comment.createAt*1000).toLocaleDateString()}</p>
            </div>
        </>
    )
}

export default Comments