import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-0'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          My Website
        </Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/category'>
                Clothes
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/category'>
                Shoes
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/category'>
                Jewellery
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/checkout'>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;
