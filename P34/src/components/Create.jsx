import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, author}
    setIsPending(true)
    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    })
    .then(() => {
      setIsPending(false)
      // history.go(-1)
      navigate('/')
    })
  }
  return (
    <div>
      <h2 className='text-xl font-bold text-pink-600'>Add a New Blog</h2>
      <form className='w-[600px]' onSubmit={handleSubmit}>
        <label className='block my-4 text-lg font-bold text-pink-500'>Blog Title:</label>
        <input
          className="border-2 border-gray-500 rounded w-full p-1"
          type="text"
          required
          onBlur={(e) => setTitle(e.target.value)}
        />
        <label className='block my-4 text-lg font-bold text-pink-500'>Blog Body:</label>
        <textarea 
          className="border-2 border-gray-500 rounded w-full p-1 h-28"
          type="text"
          required
          onBlur={(e) => setBody(e.target.value)}
        />
        <label className='block my-4 text-lg font-bold text-pink-500'>Blog Author:</label>
        <select
          className='p-1 w-full border-2 border-gray-500'
          onClick={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {isPending ? 
        <div className='flex justify-center mt-5'><button className='p-2 rounded-lg bg-red-500 text-white'>Add Blog....</button></div>
        : <div className='flex justify-center mt-5'><button className='p-2 rounded-lg bg-red-500 text-white'>Add Blog</button></div>}
      </form>
      <p>{}</p>
    </div>
  )
}

export default Create