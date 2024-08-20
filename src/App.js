
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Landing from './Landing-page/Landing';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
   
   </Routes>
   </Router>
   <Footer/>
    </div>
  );
}

export default App;
