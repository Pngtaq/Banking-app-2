import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/homepage">
      <img src="/images/logo.png" alt="wolf-image" />
      <span>FlowerBank</span>
    </Link>
  );
}

export default Logo;
