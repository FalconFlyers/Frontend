import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (

    <div>
         <nav className="navbar navbar-expand-lg  bg-light fixed-top" id="navb">
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
        </li>  */}
         </ul>
         

      <div id="button">
           <a className="nav-link active" href="/login" ><button className="mx-4" >profile</button></a> 
        </div>
       

    </div>
  </div>
 
</nav> 
{/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}
    </div>
  )
}

export default Navbar