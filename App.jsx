import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import HomeAllArticles from './Components/HomeAllArticles'
import SingleArticle from './SingleArticle';


function App() {
  return (
    <>
      <div>
       <Header />
       <Nav />
          <Routes>
          <Route exact path="/" element={<HomeAllArticles />} />
          <Route exact path="/articles" element={<HomeAllArticles />} />
          <Route exact path="/articles/:id" element={<SingleArticle />} />
          <Route exact path="*" element={<p>"No Route found"</p>} />
          </Routes>
      </div>
     
    </>
  )
}

export default App
