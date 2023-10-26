export default function UserMenu() {
  return (
    <div className="h-full text-white  flex flex-col justify-between px-20 py-10 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-300 rounded">
      <div className="flex items-center">
        <img src="/images/logo.png" className="w-20" />
        <div>
          <p>Name: John Raison V. Salvador</p>
          <p>Account number: 2132131312</p>
        </div>
      </div>
      <div className="flex flex-col  text-center ">
        <button className="rounded-md px-5 py-4 font-medium bg-gray-700 text-lg mt-10">
          Deposit
        </button>
        <butto className="rounded-md px-5 py-4 font-medium bg-gray-700 text-lg mt-10">
          Withdraw
        </butto>
        <button className="rounded-md px-5 py-4 font-medium bg-gray-700 text-lg mt-10">
          Loan
        </button>
        <button className="rounded-md px-5 py-4 font-medium bg-gray-700 text-lg mt-10">
          Transfer
        </button>
      </div>
      <div className="mx-auto">
        <button className="text-emerald-500 rounded-md px-5 py-4 font-medium bg-gray-700 text-lg mt-10 ">
          Logout
        </button>
      </div>
    </div>
  );
}
