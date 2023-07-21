import { useState } from "react"

export default function AddComment() {

    const [formData, updateFormData] = useState({})

    function addComment(e) {
        e.preventDefault()
        updateFormData({username: e.target.nameBox.value, body:  e.target.commentBox.value})
        
    }

    console.log(formData)


    return (
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