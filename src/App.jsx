import './App.css'
import Navbar from './component/Navbar'
import Lists from './component/Lists.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App=()=> {
 return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Lists/>}/>
      </Routes>
      
    </Router>
  )
}

export default App
