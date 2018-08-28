import React from 'react'

const Nav = (props) => {
  return(

      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Crypto Prices</a>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Toggle USD</a></li>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li onClick={props.clickHandler}><a href="#">Ticker</a></li>
                  <li><a href="#">Market Cap</a></li>
                  <li><a href="#">Price</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )

}

export default Nav
