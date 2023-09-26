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
    }).catch((err) => {
        setIsError(err.message)
    })
},[formData])
    


    return formData && !isError ?  (
            <div className="newComment">
             <div className="comment-card">
                <div className="author-date-comment">
                    <h5 className="card-author">cooljmessy</h5>
                    <p className="ac-date">just now...</p>
                </div>
                <p className="comment-text">{formData.body}</p>
            </div>
             <div className="add-comment-container">
             <form onSubmit={addComment}>
                 <label htmlFor="name-box">
                 <input placeholder="name" name="nameBox"alt="name box" id="name-box" value="cooljmessy"></input>
                 </label>
                 <label htmlFor="comment-box">
                 <textarea name="commentBox" id="comment-box" placeHolder="Have your say..."/>
                 </label>
                 <button alt="submit-button">Submit</button>
             </form>
         </div>
         </div>
        ): 
    (
        <div className="error-state-post-comment">
        <p>{isError}</p>
        <div className="newComment">

        <div className="add-comment-container">
             <form onSubmit={addComment}>
                 <label htmlFor="name-box">
                 <input placeholder="name" className="card-author" name="nameBox"alt="name box" id="name-box" value="cooljmessy"></input>
                 </label>
                 <label htmlFor="comment-box">
                 <input type="text "name="commentBox" id="comment-box" placeHolder="Have your say..."/>
                 </label>
                 <button alt="submit-button">Submit</button>
             </form>
         </div>
    </div>
    </div>
    )
}