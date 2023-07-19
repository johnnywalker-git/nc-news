import { useEffect, useState } from "react";
import { getArticleComment } from "./utils/api";

export default function ArticleComments({articleId}) {
    const [comments,setComments] = useState([])

    useEffect(() => {
        getArticleComment(articleId).then((data) => {
            setComments(data)
        })
    }, [])

    return (
        comments.map((comment) => {
            return <div className="comment-card">
            <p>Author: {comment.author}</p>
            <p>Created: {comment.created_at}</p>
            <p>Comment: {comment.body}</p>
            <p>Votes: {comment.votes}</p>
            </div>
        })
    )

   
}