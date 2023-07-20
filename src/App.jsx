import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import HomeAllArticles from './Components/HomeAllArticles'
import SingleArticle from './SingleArticle';


function App() {
  const [votes,setVotes] = useState("hello")
  return (
    <>
      <div>
       <Header />
       <Nav />
          <Routes>
          <Route path="/" element={<HomeAllArticles />} />
          <Route path="/articles" element={<HomeAllArticles />} />
          <Route path="/articles/:id" element={<SingleArticle votes={votes} setVotes={setVotes}/>} />
          <Route path="*" element={<p>"No Route found"</p>} />
          </Routes>
      </div>
     
    </>
  )
}

export default App
