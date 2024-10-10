import { Link } from "react-router-dom";
const BlogList = ({blogs, title, handleDelete}) => {
  return ( 
    <div>
      <h2 className="font-bold text-2xl text-pink-600 ">{title}</h2>
      {blogs.map((blog) => (
        <div className="py-3 px-5 my-5 border-b hover:shadow-md" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
          <h2 className="font-bold text-xl mb-2 text-pink-600">{blog.title}</h2>
          <p className="text-base ">Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
   );
}
 
export default BlogList;