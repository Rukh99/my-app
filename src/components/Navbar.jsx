import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid mx-3">
    <form class="d-flex" role="search">
      <input class="form-control me-5" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
     

      <navlink class="nav-item" to ="/testimonial">
      Testimonial
      </navlink>

      <navlink class="nav-item" to ="/service">
      SERVICES
      </navlink>

      <navlink class="nav-item" to ="/header">
      About us 
      </navlink>




    </form>
  </div>
</nav>
    
    </div>
  )
}

export default Navbar