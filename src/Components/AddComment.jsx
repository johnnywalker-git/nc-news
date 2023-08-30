import { useEffect, useState } from "react"
import { addArticleComment } from "./utils/api"

export default function AddComment({articleId}) {

    const [formData, updateFormData] = useState(false)
    const [isError, setIsError] = useState()

    function addComment(e) {
        e.preventDefault()
        updateFormData({"username": e.target.nameBox.value, "body":  e.target.commentBox.value})
    }

   useEffect(() => {
    formData && addArticleComment(articleId,formData).then((response) => {
        console.log(response)
    }).catch((err) => {
        setIsError(err.message)
    })
},[formData])



    return formData && !isError ?  (
            <div className="newComment">
            <form onSubmit={addComment}>
                <div className="comment-card">
            <p>Author: {formData.username}</p>
            <p>Comment: {formData.body}</p>
            <div className="add-comment-container">
                <label htmlFor="name-box">
                <input placeholder="name" name="nameBox"alt="name box" id="name-box"></input>
                </label>
                <label htmlFor="comment-box">
                <textarea placeholder="Comment" name="commentBox" id="comment-box"/>
                </label>
                <button alt="submit-button">Submit</button>
                </div>
                </div>
            </form>
            </div>
        ): 
    (
        <div className="error-state-post-comment">
        <p>{isError}</p>
    <div className="add-comment-container">
        <form onSubmit={addComment}>
            <label htmlFor="name-box">
            <input placeholder="name" name="nameBox"alt="name box" id="name-box" value="cooljmessy" disabled="true"></input>
            </label>
            <label htmlFor="comment-box">
            <textarea placeholder="Comment" name="commentBox" id="comment-box"/>
            </label>
            <button alt="submit-button">Submit</button>
        </form>
    </div>
    </div>
    )
}