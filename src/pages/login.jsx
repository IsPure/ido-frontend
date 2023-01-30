import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { onLogin } from "../api/authAPI";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin(values);
      dispatch(authenticateUser());
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <Layout>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg- col-xl-6 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>
                    <form
                      onSubmit={(e) => onSubmit(e)}
                      className="mx-1 mx-md-4"
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <div className="form-floating mb-3">
                            <input
                              onChange={(e) => onChange(e)}
                              type="email"
                              id="email"
                              name="email"
                              value={values.email}
                              className="form-control"
                              placeholder="Email"
                              required
                            />
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <div className="form-floating mb-3">
                            <input
                              onChange={(e) => onChange(e)}
                              value={values.password}
                              type="password"
                              id="password"
                              className="form-control"
                              placeholder="Password"
                              name="password"
                              required
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* error div */}
                      <div
                        className="text-center ms-2 my-3"
                        style={{ color: "red" }}
                      >
                        {error}
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg mx-4"
                        >
                          Register
                        </button>
                        <Link to="/login">
                          <button
                            type="button"
                            className="btn btn-light btn-lg mx-4 border"
                          >
                            Sign In
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2 d-none d-lg-block">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1569264630284-770de3d5935d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                        className="img-fluid"
                        alt="Sample image"
                        style={{ maxHeight: 700, borderRadius: 25 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
