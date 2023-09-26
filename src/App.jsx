import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import HomeAllArticles from './Components/HomeAllArticles'
import SingleArticle from './Components/SingleArticle';



function App() {
  const [topics, setTopics] = useState(["placeholder", "placeholder2"])
  const [votes,setVotes] = useState("hello")
  return (
      <div>
       <Header />
       <Nav topics={topics} setTopics={setTopics} />
          <Routes>
          <Route path="nc-news-jw.netlify.app/" element={<HomeAllArticles />} />
          <Route path="nc-news-jw.netlify.app/articles" element={<HomeAllArticles />} />
          <Route path="nc-news-jw.netlify.app/articles/topics/:topic" element={<HomeAllArticles />} />
          <Route path="nc-news-jw.netlify.app/articles/:id" element={<SingleArticle votes={votes} setVotes={setVotes}/>} />
          <Route path="*" element={<p>"No Route found"</p>} />
          </Routes>
      </div>
  )
}

export default App
