import { useState } from "react"
import { addArticleComment } from "./utils/api"

export default function AddComment({articleId}) {

    const [formData, updateFormData] = useState()

    function addComment(e) {
        e.preventDefault()
        updateFormData({"username": e.target.nameBox.value, "body":  e.target.commentBox.value})
        
        console.log(formData, "just before req.")


        // addArticleComment(articleId,formData).then((response) => {
        //     console.log(response)
        // })
    
    
    }



    return formData ?  (
        <div className="add-comment-container">
            <form onSubmit={addComment}><div className="comment-card">
            <p>Author: {formData.username}</p>
            <p>Comment: {formData.body}</p>
            </div>
                <label htmlFor="name-box">
                <input placeholder="name" name="nameBox"alt="name box" id="name-box"></input>
                </label>
                <label htmlFor="comment-box">
                <textarea placeholder="Comment" name="commentBox" id="comment-box"/>
                </label>
                <button alt="submit-button">Submit</button>
            </form>
        </div>
        ): 
    (
    <div className="add-comment-container">
        <form onSubmit={addComment}>
            <label htmlFor="name-box">
            <input placeholder="name" name="nameBox"alt="name box" id="name-box"></input>
            </label>
            <label htmlFor="comment-box">
            <textarea placeholder="Comment" name="commentBox" id="comment-box"/>
            </label>
            <button alt="submit-button">Submit</button>
        </form>
    </div>
    )
}