import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./component/Login.jsx";
import SignUp from "./component/SignUp.jsx";
import TodoList from "./component/TodoList.jsx";
import Home from "./component/Home.jsx";
import Footer from "./component/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
          <main className="flex-grow">
            <Routes> 

            
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/todo" element={<TodoList />} />
            </Routes>
          </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
