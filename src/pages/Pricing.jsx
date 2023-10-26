import PageNav from "../components/PageNav";

export default function Pricing() {
  return (
    <div className="h-full">
      <PageNav />
      <section className="flex md:flex-row flex-col h-5/6 text-white">
        <div className="p-6 flex flex-col justify-center items-center text-center">
          <h1 className="sm:text-7xl text-4xl">Simple pricing.</h1>
          <h1 className="sm:text-7xl text-4xl">
            Just <span className="text-emerald-500">10$/month</span>
          </h1>
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
