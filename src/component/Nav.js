import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span class="fs-4">Header</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="/parti" class="nav-link active" aria-current="page">
                LogIn
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/partii" class="nav-link">
                Information
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Nav;
