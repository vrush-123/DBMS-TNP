import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Companies from './Components/Companies';
import YourApplication from './Components/YourApplication';
import AddStudent from './Components/AddStudent';
import AddCompany from './Components/AddCompany';
import CompanyApplication from './Components/CompanyApplication';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/addcompany" element={<AddCompany />} />
          <Route path="/listofcomp" element={<Companies />} />
          <Route path="/listofapp" element={<CompanyApplication />} />
          <Route path="/yourapp" element={<YourApplication />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
