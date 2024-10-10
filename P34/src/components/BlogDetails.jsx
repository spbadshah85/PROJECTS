import React from 'react'
import useFetch from '../useFetch'
import { useNavigate, useParams } from 'react-router-dom'

function BlogDetails() {
  const {id} = useParams()
  const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
  const navigate = useNavigate()
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: 'DELETE'
    })
    .then(() => navigate('/') )
  }
  return (
    <>
      {error && <p className="text-2xl font-bold">{error}</p>}
      {isPending && <p className="text-2xl font-bold">Loading......</p>}
      {blog && (
        <article>
        <h2 className="font-bold text-xl text-pink-600">{blog.title}</h2>
        <p className='font-bold mb-2'>written by {blog.author}</p>
        <p>{blog.body}</p>
        <div className='flex justify-center mt-5'><button className='p-2 rounded-lg bg-red-500 text-white' onClick={handleClick}>Delete</button></div>
      </article>
      )}
    </>
  )
}

export default BlogDetails