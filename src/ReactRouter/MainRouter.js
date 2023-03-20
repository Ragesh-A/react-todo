import Home from "../pages/Home";
import ClassTodo from "../pages/class/ClassTodo";
import FunctionalTodo from "../pages/function/FunctionalTodo";
import { Routes, Route, Link } from "react-router-dom";

const MainRouter = ()=>{
  return ( 
    <>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to='class-todo'>Class Todo</Link></li>
          <li><Link to='functional-todo'>Functional Todo</Link></li>
        </ul>
      </header>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class-todo" element={<ClassTodo />} />
          <Route path="/functional-todo" element={<FunctionalTodo />} />
        </Routes>
      
    </>
  )
}

export default MainRouter;