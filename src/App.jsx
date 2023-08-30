import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import HomeAllArticles from './Components/HomeAllArticles'


function App() {
  const [topics, setTopics] = useState([])

  return (
    <>
      <div>
       <Header />
       <Nav topics={topics} setTopics={setTopics}/>
          <Routes>
          <Route path="/" element={<HomeAllArticles />} />
          <Route path="/articles" element={<HomeAllArticles />} />
          <Route path="/articles/:topic" element={<HomeAllArticles />} />
          <Route path="*" element={<p>"No Route found"</p>} />
          </Routes>
      </div>
     
    </>
  )
}

export default App
