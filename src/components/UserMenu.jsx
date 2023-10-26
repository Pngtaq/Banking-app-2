export default function UserMenu({ handleIsOpen }) {
  return (
    <div className="h-full text-white  flex flex-col justify-between py-10 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-300 rounded relative mb-3 md:w-1/2 w-full  px-10">
      <button
        className="absolute top-2 right-5 rounded-full px-2 py-2 font-medium bg-gray-700 h-10 w-10 text-sm"
        onClick={handleIsOpen}
      >
        X
      </button>
      <div className="flex flex-col">
        <img src="/images/logo.png" className="w-16" />
        <div>
          <p>Name: John Raison V. Salvador</p>
          <p>Account number: 2132131312</p>
        </div>
      </div>
      <div className="flex flex-col  text-center gap-5">
        <button className="rounded-md px-5 py-4 font-medium bg-gray-700 text-lg  hover:bg-gray-500">
          Deposit
        </button>
        <button className="rounded-md px-5 py-4 font-medium bg-gray-700 text-lg  hover:bg-gray-500">
          Withdraw
        </button>
        <button className="rounded-md px-5 py-4 font-medium bg-gray-700 text-lg  hover:bg-gray-500">
          Loan
        </button>
        <button className="rounded-md px-5 py-4 font-medium bg-gray-700 text-lg  hover:bg-gray-500">
          Bank transfer
        </button>
        <button className="rounded-md px-5 py-4 font-medium bg-gray-700 text-lg  hover:bg-gray-500">
          Transaction history
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
