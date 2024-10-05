import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/Dashboard2">AgencyDashboard</Link>
    </nav>
  );
}
