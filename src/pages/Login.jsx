import PageNav from "../components/PageNav";

export default function Login() {
  return (
    <div>
      <PageNav />

      <form>
        <h4>Email address</h4>
        <input type="email"></input>
        <h4>Password</h4>
        <input type="password"></input>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
