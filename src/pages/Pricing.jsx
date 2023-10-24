import PageNav from "../components/PageNav";

export default function Pricing() {
  return (
    <div className="h-screen overflow-hidden px-16 py-4">
      <PageNav />
      <section>
        <div>
          <h1>Simple pricing.</h1>
          <h1>Just 10$/month</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            veniam perferendis recusandae sed consequatur aliquam? Rem iure
            veritatis, soluta maxime libero doloribus, totam minima, dolore
            quasi placeat corporis velit aperiam?
          </p>
        </div>
        <div>
          <img src="/images/pricing-image.jpeg"></img>
        </div>
      </section>
    </div>
  );
}
