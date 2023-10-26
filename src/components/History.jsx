export default function History() {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-[1fr,1fr,6rem] text-lg font-bold border-b-[1px] gap-4">
        <p>Deposit</p>
        <p>Amount</p>
        <p>Date</p>
      </div>
      <div className="pt-1">
        <div className="grid grid-flow-col grid-cols-[1fr,1fr,6rem] ">
          <p>Withdraw</p>
          <p>200000</p>
          <p>07-23-40</p>
        </div>
        <div className="grid grid-flow-col grid-cols-[1fr,1fr,6rem]">
          <p>Transfer</p>
          <p>10000</p>
          <p>01-23-23</p>
        </div>
        <div className="grid grid-flow-col grid-cols-[1fr,1fr,6rem]">
          <p>Loan</p>
          <p>30000</p>
          <p>07-10-23</p>
        </div>
        <div className="grid grid-flow-col grid-cols-[1fr,1fr,6rem]">
          <p>Deposit</p>
          <p>10000</p>
          <p>07-01-23</p>
        </div>
        <div className="grid grid-flow-col grid-cols-[1fr,1fr,6rem]">
          <p>Deposit</p>
          <p>100</p>
          <p>07-23-24</p>
        </div>
        <div className="grid grid-flow-col grid-cols-[1fr,1fr,6rem]">
          <p>Transfer</p>
          <p>1000</p>
          <p>07-23-23</p>
        </div>
      </div>
    </>
  );
}
