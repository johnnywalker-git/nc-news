import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { getSelectedArticle } from './utils/api';
import Votes from './Votes';
import ArticleComments from './ArticleComments';
import AddComment from './AddComment';
import { formatDistanceToNow } from 'date-fns';




export default function SingleArticle({votes, setVotes}) {

    function formatDateToAgo(isoDate) {
        const date = new Date(isoDate);
        return formatDistanceToNow(date, { addSuffix: true });
      }


    const {id} = useParams()
    const [currentArticle,setCurrentArticle] = useState("Hi")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getSelectedArticle(id).then((data) => {
            return data
        }).then((article) => {
            setCurrentArticle(article)
            setVotes(article.votes)
            setCurrentArticle(article)
            setLoading(false)
            console.log(article)
        })
    }, [id])

    return loading ? 
     ( <div>
            <div className="loader" alt="website loading"></div>
        </div>
    )   : 
        ( <div className="full-article">
        <div className="article-box">
            <div className="article-image-box">
            <img src={currentArticle.article_img_url} />
            <div className="votes-overlay">
            <Votes currentVotes={votes} setVotes={setVotes} articleId={currentArticle.article_id} votes={currentArticle.votes}/>
            </div>
            </div>
            <div className="article-info-box">
      <h1>{currentArticle.title}</h1>
            <div className="article-author-date-box">
                <p>{currentArticle.author}</p>
                <p className='ac-date'>{formatDateToAgo(currentArticle.created_at)}</p>
            </div>
            <div className="article-text-box">
                <p>{currentArticle.body}</p>
            </div>
            </div>

        
            
        </div>
        <div className="all-article-comments">
            <h3 className='comment-title'>Comments...</h3>
        <ArticleComments articleId={currentArticle.article_id}/>
        </div>
        <AddComment articleId={currentArticle.article_id}/>
    </div>
        )
    }
