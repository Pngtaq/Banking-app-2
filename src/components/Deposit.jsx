export default function Deposit() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 ">
      <div className="flex justify-center flex-col ">
        <p>Amount (Max of PHP 50,000.00)</p>
        <input type="number" placeholder="P0.00" className="rounded w-1/2" />
      </div>

      <div className="flex justify-center flex-col ">
        <p>Send receipt to(optional)</p>
        <input type="email" placeholder="P0.00" className="rounded w-1/2" />
      </div>
    </div>
  );
}
