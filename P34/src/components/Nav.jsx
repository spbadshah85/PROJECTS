import { Link } from "react-router-dom";

const Nav = () => {
  return ( 
    <nav className="max-w-[600px] flex justify-between items-center mx-auto p-5 border-b border-gray-300">
      <h1 className="text-2xl font-bold text-pink-600">The Dojo Blog</h1>
      <div className="">
        <Link className="p-4 hover:text-red-500" to="/">Home</Link>
        <Link className="p-4 hover:text-red-500" to="/create">New Blog</Link>
      </div>
    </nav>
   );
}
 
export default Nav;