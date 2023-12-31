import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className="grid h-screen grid-rows-[auto_1fr]">
      <PageNav />
      <section className="flex flex-col items-center justify-center h-full text-center text-white bg-gray-900 p-4">
        <h1 className="sm:text-7xl text-4xl">
          {" "}
          Your <span className="text-emerald-500">money</span> is important to
          us.{" "}
        </h1>
        <h1 className="py-6 sm:text-7xl text-4xl">
          The world safest{" "}
          <span className="text-emerald-500">online bank website.</span>
        </h1>
        <h3 className="text-sm px-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          unde laboriosam aut velit similique fugiat nisi pariatur, iste nobis
          repellat nam illo dolor tempore ipsum nihil aspernatur labore ea
          perspiciatis.
        </h3>
        <Link
          to="/applayout"
          className="text-emerald-500 rounded-md px-5 py-4 font-medium bg-gray-700 text-lg mt-10"
        >
          START DEPOSITING NOW
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
