export default function ArticleCard({article}) {
    return(
        <div className="content-card">
            <div>
                <img src={article.article_img_url} className="card-image"/>
            </div>
            <h2>{article.title}</h2>
            <h3>{article.author}</h3>
            <p>{article.comment_count}</p>
            <button>Link</button>
        </div>
    )
}