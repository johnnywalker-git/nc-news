import { useEffect, useState } from "react";
import { getArticleComment } from "./utils/api";
import { useSearchParams } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';


export default function ArticleComments({articleId}) {
    const [isLoading, setIsLoading] = useState(true)
    const [comments,setComments] = useState([])

    function formatDateToAgo(isoDate) {
        const date = new Date(isoDate);
        return formatDistanceToNow(date, { addSuffix: true });
      }

    useEffect(() => {
        getArticleComment(articleId).then((data) => {
            setComments(data)
            setIsLoading(false)
        })
    }, [])

    if (comments && !isLoading){  return(
        comments.map((comment) => {
            return <div className="comment-card" key={comment.comment_id}>
                <div className="author-date-comment">
                    <h5 className="card-author">{comment.author}</h5>
                    <p className="ac-date">{formatDateToAgo(comment.created_at)}</p>
                </div>
            <p className="comment-text">Comment: {comment.body}</p>
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