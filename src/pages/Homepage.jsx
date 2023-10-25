import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className="h-full">
      <PageNav />

      <section className="flex flex-col items-center justify-center h-3/4 text-center text-white mt-10">
        <h1 className="sm:text-7xl text-3xl">
          {" "}
          Your <span className="text-emerald-500">money</span> is important to
          us.{" "}
        </h1>
        <h1 className="py-6 sm:text-7xl text-3xl">
          The world safest{" "}
          <span className="text-emerald-500">online bank website.</span>
        </h1>
        <h3 className="text-sm  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          unde laboriosam aut velit similique fugiat nisi pariatur, iste nobis
          repellat nam illo dolor tempore ipsum nihil aspernatur labore ea
          perspiciatis.
        </h3>
        <Link
          to="/applayout"
          className="text-emerald-500 rounded-md px-5 py-4 font-medium bg-gray-700 mt-16 text-lg"
        >
          START DEPOSITING NOW
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
