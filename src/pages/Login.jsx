import PageNav from "../components/PageNav";

export default function Login() {
  return (
    <div className="h-screen overflow-hidden px-16 py-4 ">
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
