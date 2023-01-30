import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isAuth = false;

  return (
    <div id="mainNavigation">
      <nav role="navigation ">
        <div className="py-3 text-center border-bottom">
          <div className="container" style={{ maxWidth: 300 }}>
            <img
              src="/images/Stephanie + Isaac-1 copy.png"
              alt=""
              className="invert"
            />
          </div>
        </div>
      </nav>
      <div className="navbar-expand-md">
        <div className="navbar-dark text-center my-2">
          <button
            className="navbar-toggler w-75"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>{" "}
            <span className="align-middle">Menu</span>
          </button>
        </div>
        <div
          className="text-center mt-3 collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <NavLink to={"/"}>
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Story
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Event Details
              </a>
            </li>
            {isAuth ? (
              <>
                <li className="nav-item">
                  <NavLink to="/dashboard">
                    <a className="nav-link" href="#">
                      Dashboard
                    </a>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login">
                    <a className="nav-link" href="#">
                      Login
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register">
                    <a className="nav-link" href="#">
                      Register
                    </a>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
