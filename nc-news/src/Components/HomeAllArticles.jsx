import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import getAllArticles from "./utils/api"

export default function HomeAllArticles() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllArticles()
        .then((data) => {
            setArticles(data)     
        }).then(() => {
            setLoading(false)
        })
    }, [])

    return loading ? 
     ( <div>
            <div className="loader" alt="website loading"></div>
        </div>
    )   : 
    
    (
        articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id}/>
        })
    )
}