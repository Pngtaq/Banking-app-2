import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className="h-screen overflow-hidden px-16 py-4 ">
      <PageNav />

      <section className="flex text-center  m-auto h-3/6 items-center">
        <div>
          <h1 className="text-7xl"> Your money is important to us. </h1>
          <h1 className="text-7xl">The world safest online bank website.</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            unde laboriosam aut velit similique fugiat nisi pariatur, iste nobis
            repellat nam illo dolor tempore ipsum nihil aspernatur labore ea
            perspiciatis.
          </h3>
          <Link to="/applayout" className="btn">
            START DEPOSITING NOW
          </Link>
        </div>
        <div>Hello world</div>
      </section>
    </main>
  );
}

export default Homepage;
