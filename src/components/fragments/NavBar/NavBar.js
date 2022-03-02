import React from 'react'
import brand from '../../../images/Brand.png'


export default function NavBar() {
  return (
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-11">
        <div className="row">
          <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src={brand} alt="Al-Uswah"/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarID">
                <div className="navbar-nav ms-auto">
                  <a className="nav-link" href="#">Jenjang</a>
                  <a className="nav-link" href="#">Kenapa Al-Uswah?</a>
                  <a className="nav-link" href="#">Kontak</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  )
}
