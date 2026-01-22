import './App.css'
import Navbar from './component/Navbar'
import Lists from './component/Lists.jsx'
import Auth from './component/Auth.jsx';
import TodoList from './component/TodoList.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App=()=> {
 return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Lists/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/todo' element={<TodoList/>}/>
      </Routes>
      
    </Router>
  )
}

export default App
