
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { formatDistanceToNow } from 'date-fns';


export default function ArticleCard({article}) {
    function formatDateToAgo(isoDate) {
        const date = new Date(isoDate);
        return formatDistanceToNow(date, { addSuffix: true });
      }

    return(
        <div className="content-card">
            <div className='image-container'>
            <Link to={`/articles/${article.article_id}`}>
                <img src={article.article_img_url} className="card-image"/>
                <div className="votes-overlay">
                <Icon icon="clarity:thumbs-up-solid" hFlip={false} vFlip={false}></Icon>
                <div className="ac-votes-spacer" style={{paddingLeft: 5}}></div>
                {article.votes}
                </div>
                </Link>
            </div>
            <div className="ac-topic-author">
            <Link className="link" to={`/articles/topics/${article.topic}`}>
            <button className='topic-button' onClick={() => {document.documentElement.scrollTop = 0}}>{article.topic} </button>
            </Link>
            <div>
            <h5 className='card-author'>{article.author}</h5>
            <p className="ac-date">{formatDateToAgo(article.created_at)}</p>
            </div>
            </div>
            <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none' }}>
            <h3>{article.title}</h3>
            </Link>
            <Link to={`/articles/${article.article_id}`}>
                <button className='css-button-arrow--red'>Read more...</button>
            </Link>
        </div>
    )
}