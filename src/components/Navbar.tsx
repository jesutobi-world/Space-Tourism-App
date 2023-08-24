import { Link } from 'react-router-dom';
import { TiTimes, TiThMenu } from "react-icons/ti";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className='logo'>
          <circle cx="24" cy="24" r="24" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17" />
        </svg>
      </div>
      <nav className="nav-menu">
        <TiTimes className="times" />
        <ul className="nav-list">
          <li><Link to="/" className='list-item'><span>00</span>Home</Link></li>
          <li><Link to="/destination" className='list-item'><span>01</span>Destination</Link></li>
          <li><Link to="/crew" className='list-item'><span>02</span>Crew</Link></li>
          <li><Link to="/technology" className='list-item'><span>03</span>Technology</Link></li>
        </ul>
        <div className="nav-line"></div>
      </nav>
      <TiThMenu className="bars" />
    </div>
  )
}
