import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { getSelectedArticle } from './utils/api';
import Votes from './Votes';
import ArticleComments from './ArticleComments';
import AddComment from './AddComment';



export default function SingleArticle({votes, setVotes}) {


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
            </div>
            <div className="article-info-box">
      <h1>{currentArticle.title}</h1>
            <div className="article-author-date-box">
                <p>{currentArticle.author}</p>
                <p>{currentArticle.created_at}</p>
            </div>
            <div className="article-text-box">
                <p>{currentArticle.body}</p>
            </div>
        </div>
            <Votes currentVotes={votes} setVotes={setVotes} articleId={currentArticle.article_id} votes={currentArticle.votes}/>
        </div>
        <ArticleComments articleId={currentArticle.article_id}/>
        <AddComment articleId={currentArticle.article_id}/>
    </div>
        )
    }
