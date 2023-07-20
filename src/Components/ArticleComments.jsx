import { useEffect, useState } from "react";
import { getArticleComment } from "./utils/api";
import { useSearchParams } from "react-router-dom";

export default function ArticleComments({articleId}) {
    const [isLoading, setIsLoading] = useState(true)
    const [comments,setComments] = useState([])

    useEffect(() => {
        getArticleComment(articleId).then((data) => {
            setComments(data)
            setIsLoading(false)
        })
    }, [])

    if (comments && !isLoading){  return(
        comments.map((comment) => {
            return <div className="comment-card" key={comment.comment_id}>
            <p>Author: {comment.author}</p>
            <p>Created: {comment.created_at}</p>
            <p>Comment: {comment.body}</p>
            <p>Votes: {comment.votes}</p>
            </div>
        })
    ) } 
    else if (comments && isLoading) {
        return  ( <div>
            <div className="loader" alt="website loading"></div>
        </div>
    ) 
        }
    else {
        return <p>No comments</p>
    }
}