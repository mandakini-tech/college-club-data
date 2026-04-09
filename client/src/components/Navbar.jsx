import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ onToggleSidebar, sidebarOpen }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <button
            className={`hamburger ${sidebarOpen ? 'open' : ''}`}
            onClick={onToggleSidebar}
            aria-label="Toggle menu"
            aria-expanded={sidebarOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link to="/" className="logo">CommitteHub</Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/announcements" className={location.pathname === '/announcements' ? 'active' : ''}>Announcements</Link></li>
          <li><Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Link></li>
          <li><Link to="/match" className={location.pathname === '/match' ? 'active' : ''}>Connect</Link></li>
        </ul>
      </div>
    </nav>
  );
}
