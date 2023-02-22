import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../api/authAPI";
import { unauthenticateUser } from "../redux/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const logout = async () => {
    try {
      await logOut();

      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div id="mainNavigation">
      <nav role="navigation ">
        <div className="text-center border-bottom">
          <div className="container" style={{ maxWidth: 500 }}>
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
            className="navbar-toggler w-75 border border-light"
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
              <NavLink to="/" className="nav-link active" aria-current="page">
                Home
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
                  <NavLink to="/dashboard" className="nav-link">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
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
