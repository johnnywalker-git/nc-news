import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import HomeAllArticles from './Components/HomeAllArticles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Header />
       <Nav />
       <HomeAllArticles />
      </div>
     
    </>
  )
}

export default App
