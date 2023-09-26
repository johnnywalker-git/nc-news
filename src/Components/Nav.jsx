import { useEffect, useState } from "react"
import { getTopics } from "./utils/api"
import { Link, useLocation } from "react-router-dom"



export default function Nav({topics, setTopics}) {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)

    function menuToggle() {
        const buttons = document.querySelectorAll(".topic-btn")
        console.log(buttons)
        buttons.forEach((button) => {
            if(button.classList[1] === "hidden"){
            button.classList.remove("hidden")}
            else {
                button.classList.add("hidden")
            }
        })
        
        
    }

    useEffect(() => {
        getTopics().then((data) => {
            setTopics(data)
        }).then(() => {
            setIsLoading(false)
        })
    }, [topics])

    return !isLoading ? (
        <div className="nav-bar">
            <div className="mobile-menu-icon" onClick={(e) => {menuToggle(e)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" fillRule="evenodd" d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535ZM18.75 16a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75ZM18 12.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5h12ZM18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75Z" clipRule="evenodd"/></svg>
            </div>
                <Link className="link" to={`/articles`}>
                    <button className={`topic-btn`}id={`${location.pathname === "/articles" ? "active" : ""}`}>
                        All articles
                    </button>
                    </Link>
                {topics.map((topic) => {
                    return <Link className="link" to={`/articles/topics/${topic.slug}`} key={topic.slug}><button className="topic-btn" id={`${location.pathname === `/articles/topics/${topic.slug}` ? "active" : ""}`}><p>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</p></button></Link>
                })}
        </div>
    ) :
    (
        <p>No data</p>
    )

}