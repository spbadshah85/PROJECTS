import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
  console.log(blogs)
  return ( 
    <div className="home">
      {error && <p className="text-2xl font-bold">{error}</p>}
      {isPending && <p className="text-2xl font-bold">Loading......</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
   );
}
 
export default Home;