import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">WEllNess-Portal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-4 ">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       

        <form className="d-flex mx-4" role="search">
        <input className="form-control me-2 " type="search" placeholder="Explore" aria-label="Search"/>
        
      </form>
      {/* <li className="nav-item mx-4">
          <a className="nav-link active" aria-current="page" href="/about">About Us</a>
        </li> */}
         

      </ul>
      <div id="button">
          <a className="nav-link active" href="/login"><button className="mx-4">Profile</button></a>
        </div>

    </div>
  </div>
 
</nav>
    </div>
  )
}

export default Navbar