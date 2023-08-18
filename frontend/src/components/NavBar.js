import React from 'react';

export const NavBar = () => {

    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">WowDao AI Project</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/formpage">Submit Scan</a>
            </div>
          </div>
        </nav>
      </>
    )
}

export default NavBar;