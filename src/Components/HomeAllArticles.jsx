import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { useParams } from "react-router-dom"
import Votes from "./Votes"
import { getAllArticles } from "./utils/api"

export default function HomeAllArticles() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [sort, setSort] = useState("")
    const [order, setOrder] = useState("")
    const { topic } = useParams();
 
    useEffect(() => {
        getAllArticles(sort, order)
        .then((data) => {
            if(topic !== undefined){
            const result = filterByTopic(data)
            setArticles(result)}  
            else {
            setArticles(data)
            }
            console.log(sort,order)
        }).then(() => {
            setLoading(false)
        })
    }, [topic, sort, order])

    function filterByTopic(articles) {
        return articles.filter((article) => {
            return article.topic === topic
        })
    }

    const handleSortChange = (event) => {
        setSort(event.target.value)
    }

    const handleOrderChange = (event) => {
        setOrder(event.target.value)
    }

    return loading ? 
    ( <div className="loading-screen">
            <div className="loader" alt="website loading"></div>
            <h3>Please allow up to 2 mins for the assets to load</h3>
        </div>
    )   : 
    
    (   
        <div className="home-all-articles">
            <div className="h-a-a-heading">
            <h1>{topic ? `${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles` : "All Articles"}</h1>
            </div>
            <div className="sort-wrapper">
            <div className="sort-bar">
            <form action="">
            <label htmlFor="order">Sort by:</label>
                <select name="order" id="order" onChange={handleSortChange}>
                    <option value="">--</option>
                    <option value="votes">Votes</option>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comments</option>
                </select>
                <label htmlFor="order">Order:</label>
                <select name="order" id="order" onChange={handleOrderChange}>
                    <option value="">--</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

            </form>
            </div>
            </div>
            <div className="article-cards">
       {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id}/>
        })}
        </div>
        </div>
    )
}

