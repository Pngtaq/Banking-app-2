export default function UserAccountDetails() {
  return (
    <div className="bg-gray-900 w-full grid-cols-2 grid gap-4 px-10">
      <div className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 text-4xl text-center flex flex-col justify-center items-center col-span-2  h-10 m-auto px-5">
        <h1 className="text-sm">Transaction</h1>
      </div>
      <div className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 text-4xl text-center flex flex-col justify-center items-center md:col-span-1 col-span-2">
        <h1 className="text-4xl">Your balance</h1>
        <h1 className="text-7xl">P3000</h1>
      </div>
      <div className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 text-center flex flex-col justify-center items-center md:col-span-1 col-span-2">
        <h1 className="text-4xl">Loan balance</h1>
        <h1 className="text-7xl">P0</h1>
      </div>
      <div className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 text-4xl text-center flex flex-col justify-center items-center md:col-span-1 col-span-2">
        <h1 className="text-4xl">Current withdraw</h1>
        <h1 className="text-7xl text-red-500">P3000</h1>
      </div>
      <div className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 text-4xl text-center flex flex-col justify-center items-center md:col-span-1 col-span-2">
        <h1 className="text-4xl">Current Loan</h1>
        <h1 className="text-7xl text-red-500">P3000</h1>
      </div>
      <div className="font-medium  col-span-2 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 h-40 py-2 px-4 overflow-y-auto">
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
      </div>
    </div>
  );
}
