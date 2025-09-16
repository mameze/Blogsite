import Add from "./Page/Add";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Blog from "./Page/Blog";
import Header from "./Component/Header"; // make sure path is correct
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/add" element={<Add />} /> 

      </Routes>
    </>
  );
}

export default App;
