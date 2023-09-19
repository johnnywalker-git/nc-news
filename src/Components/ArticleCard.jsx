
import { Link } from 'react-router-dom';

export default function ArticleCard({article}) {
    return(
        <div className="content-card">
            <div>
                <img src={article.article_img_url} className="card-image"/>
            </div>
            <h2>{article.title}</h2>
            <h3>{article.author}</h3>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Date: {article.created_at}</p>
            <Link to={`/articles/${article.article_id}`}>See more...</Link>
        </div>
    )
}