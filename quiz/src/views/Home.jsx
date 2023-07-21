import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='home-page'>
          <h1 className='home-page-title'>Quiz App</h1>
          <Link className='home-page-link' to="/quiz">Quiz' i başlat</Link>
    </main>
  )
}

export default Home