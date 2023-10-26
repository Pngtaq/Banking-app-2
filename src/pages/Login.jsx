import PageNav from "../components/PageNav";

export default function Login() {
  return (
    <div className="h-screen">
      <PageNav />

      <div className="px-4 text-white flex items-center justify-center h-4/6">
        <div className="bg-gray-700 w-4/6 rounded flex items-center justify-center leading-8 py-12">
          <form>
            <h4>Username</h4>
            <input type="email" className="rounded"></input>
            <h4>Password</h4>
            <input type="password" className="rounded"></input>
            <div className="w-full">
              <button
                type="submit"
                className="block bg-emerald-500 text-white px-6 rounded py-2 mt-4 mx-auto"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
