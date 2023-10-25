import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/homepage"
      className="flex items-center justify-center items-center"
    >
      <img src="/images/logo.png" alt="wolf-image" className="h-20" />
      <span className="font-logo text-6xl text-emerald-500">FlowerBank</span>
    </Link>
  );
}

export default Logo;
