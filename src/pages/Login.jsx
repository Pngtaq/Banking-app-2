import PageNav from "../components/PageNav";

export default function Login() {
  return (
    <div className="h-full ">
      <PageNav />

      <div className="h-4/6 flex items-center justify-center px-4">
        <div className="bg-gray-700 px-40 py-20 rounded  max-w-full flex items-center justify-center w-90 leading-8">
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
