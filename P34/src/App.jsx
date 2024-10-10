import BlogDetails from "./components/BlogDetails";
import Create from "./components/Create";
import Home from "./components/Home"
import Nav from "./components/Nav"
import { Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";
function App() {

  return (
    <div>
      <Nav />
      <div className="max-w-[600px] mx-auto my-10">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/blogs/:id" element={<BlogDetails />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
