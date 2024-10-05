import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './home';
import SignUp from './signup';
import Dashboard from './admin.dashboard';
import AgencyDashboard from './agency.dashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Dashboard2" element={<AgencyDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
