import { NavLink } from "react-router-dom";

import Logo from "./Logo";

function PageNav() {
  return (
    <nav className="flex justify-between text-lg ">
      <Logo />
      <ul className="flex items-center justify-between px-20 gap-16">
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
