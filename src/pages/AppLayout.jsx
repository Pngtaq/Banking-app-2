import UserMenu from "../components/UserMenu";
import PageNav from "../components/PageNav.jsx";

import UserAccountDetails from "../components/UserAccountDetails";
import { useState } from "react";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(true);
  function handleIsOpen() {
    setIsOpen((isTrue) => !isTrue);
  }
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] text-white">
      <PageNav />

      <div className="flex p-4 md:flex-row flex-col relative">
        {!isOpen && (
          <button
            onClick={handleIsOpen}
            className="rounded-full px-2 py-2 font-medium bg-gray-700 h-10 w-10 text-sm"
          >
            X
          </button>
        )}
        {isOpen && <UserMenu handleIsOpen={handleIsOpen} />}
        <UserAccountDetails />
      </div>
    </div>
  );
}
