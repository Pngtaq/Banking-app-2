import { Outlet } from "react-router-dom";

export default function UserAccountDetails() {
  return (
    <div className="bg-gray-900 w-full grid-cols-2 grid gap-4 px-10">
      <div className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 text-4xl text-center flex flex-col justify-center items-center col-span-2  h-10 m-auto px-5">
        <h1 className="text-sm text-emerald-300">Transaction</h1>
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
      <div className="font-medium  col-span-2 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 h-full py-2 px-4 overflow-y-auto ">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
