import React from 'react'
import { isAutenticated } from '../services/Utils';

const Navbar = ({logout}) => {
  const isLoggedId = isAutenticated();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="/#">Quiz app</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            { isLoggedId ? 
              <li className="nav-item ">
                <a className="nav-link" href="/#" onClick={logout}> Logout </a>
              </li>
            :
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">Login</a>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;