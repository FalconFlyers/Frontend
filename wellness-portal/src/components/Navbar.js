import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">WEllNess-Portal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-4">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link active" aria-current="page" href="/myevents">Myevents</a>
        </li>

        <form className="d-flex mx-4" role="search">
        <input className="form-control me-2 " type="search" placeholder="Explore" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
      <li className="nav-item mx-4">
          <a className="nav-link active" aria-current="page" href="/about">About Us</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link active" aria-current="page" href="/login">Login</a>
        </li>


      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar