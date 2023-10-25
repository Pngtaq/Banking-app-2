import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className="h-full">
      <PageNav />

      <section className="flex flex-col items-center justify-center h-3/4 text-center">
        <h1 className="text-7xl"> Your money is important to us. </h1>
        <h1 className="text-7xl">The world safest online bank website.</h1>
        <h3 className="text-sm  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          unde laboriosam aut velit similique fugiat nisi pariatur, iste nobis
          repellat nam illo dolor tempore ipsum nihil aspernatur labore ea
          perspiciatis.
        </h3>
        <Link to="/applayout">START DEPOSITING NOW</Link>
      </section>
    </main>
  );
}

export default Homepage;
