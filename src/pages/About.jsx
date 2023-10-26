import PageNav from "../components/PageNav";

export default function About() {
  return (
    <div className="h-full">
      <PageNav />
      <section className="flex md:flex-row flex-col h-5/6 text-white">
        <div className="p-6 flex flex-col justify-center items-center text-center">
          <h1 className="sm:text-6xl text-4xl">Lorem ipsum dolor</h1>
          <h1 className="sm:text-6xl text-4xl">Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            veniam perferendis recusandae sed consequatur aliquam? Rem iure
            veritatis, soluta maxime libero doloribus, totam minima, dolore
            quasi placeat corporis velit aperiam?
          </p>
        </div>
        <div className="p-6 flex justify-center items-center">
          <img src="/images/pricing-image.jpeg"></img>
        </div>
      </section>
    </div>
  );
}
