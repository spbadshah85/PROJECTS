import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h2 className='font-bold text-xl'>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to='/' className='underline' >Go to Homepage</Link>
    </div>
  )
}

export default NotFound