import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import getAllArticles from "./utils/api"

export default function HomeAllArticles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getAllArticles()
        .then((data) => {
            setArticles(data)     
        })
    }, [])

    return (
        <div>
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
            
        </div>
    )
}