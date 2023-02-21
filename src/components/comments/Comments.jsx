const Comments = ({ comment }) => {


    return (
        <>
            <div>
                <p>{comment.msg}</p>
                <p>{comment.author}</p>
                <p>{comment.date.toLocaleDateString()}</p>
            </div>
        </>
    )
}

export default Comments