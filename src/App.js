import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header'
import Home from './Pages/Home'
import Employee from './Pages/Employee'
import { getEmployees } from './data/datamanager';

function App() {
  return (
    <div className="App">
    <Header/>
    <link href="https://fonts.googleapis.com/css2?family=Balthazar&display=swap" rel="stylesheet"/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Employee" element={<Employee data={getEmployees()}/>} />
    </Routes>
  </div>
  );
}



export default App;
