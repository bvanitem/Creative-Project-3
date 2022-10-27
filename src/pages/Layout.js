import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav id="cont1" class="navbar navbar-expand-md navbar-light bg-light">
      <a href="http://ec2-18-144-47-156.us-west-1.compute.amazonaws.com:8080/"
      class = "navbar-brand mb-0 h1">
        <img id="titlelogo" class="d-inline-block" src="images/trees.jpg"/>
      </a>
      <button type="button" data-bs-toggle="collapse" data-bs-target="#topNav" class="navbar-toggler" aria-controls="topNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="topNav">
      <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link"to="/">Home</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link"to="/about">About</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link"to="/contact">Contact</Link>
          </li>
        </ul>
        </div>
      </nav>
      
      <Outlet />
    </>
  )
};

export default Layout;