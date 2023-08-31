import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { useParams } from "react-router-dom"
import Votes from "./Votes"
import { getAllArticles } from "./utils/api"

export default function HomeAllArticles() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const { topic } = useParams();
 
    useEffect(() => {
        getAllArticles()
        .then((data) => {
            if(topic !== undefined){
            const result = filterByTopic(data)
            setArticles(result)}  
            else {
            setArticles(data)
            }
        }).then(() => {
            setLoading(false)
        })
    }, [topic])

    function filterByTopic(articles) {
        return articles.filter((article) => {
            return article.topic === topic
        })
    }

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
        <div>
            <h1>{topic ? `${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles` : "All Articles"}</h1>
       {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id}/>
        })}
        </div>

    )
}

