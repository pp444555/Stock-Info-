import React from 'react'

function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">StockInfo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link">Home<span className="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">API</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default NavBar
