export default function UserAccountDetails() {
  return (
    <div className="bg-gray-900 w-full grid-cols-2 grid gap-4 px-26 p-10">
      <div className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 text-4xl text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl">Your balance</h1>
        <h1 className="text-7xl">P3000</h1>
      </div>
      <div className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl">Loan balance</h1>
        <h1 className="text-7xl">P0</h1>
      </div>
      <div className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 text-4xl text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl">Current withdraw</h1>
        <h1 className="text-7xl text-red-500">P3000</h1>
      </div>
      <div className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 text-4xl text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl">Current Loan</h1>
        <h1 className="text-7xl text-red-500">P3000</h1>
      </div>
      <div className="font-medium  text-4xl col-span-2 row-span-3  bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100">
        transaction history
      </div>
    </div>
  );
}
