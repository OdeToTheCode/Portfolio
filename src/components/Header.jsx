import profilePic from "../assets/images/headShot.jpeg"


const Header = (props) => {

  return (
    <header style={{backgroundColor: 'grey', borderBottom: '2px solid black'}}>
      <div className="d-flex">
        <p className="navbar-brand mb-0">Jacob's Portfolio</p>
      </div>
      <nav className="navbar navbar-dark navbar-expand-md" data-bs-theme="dark">
        <div className ="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="/resume">Resume</a>
                  </li>
                  <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="/projects">Projects</a>
                  </li>
                  <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                  </li>
              </ul>
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;

