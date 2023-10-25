import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/homepage" className="flex items-center justify-center mx-1">
        <img src="/images/logo.png" alt="wolf-image" className="h-10" />
        <span className="font-logo text-4xl text-emerald-500">FlowerBank</span>
      </Link>
    </div>
  );
}

export default Logo;
