import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="decoration-none text-center">
        <h2>Welcome !</h2>
    <Link to="/questions">Click here to Start the test !</Link>
    </div>
  )
}

export default Home