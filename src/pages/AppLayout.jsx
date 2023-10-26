import UserMenu from "../components/UserMenu";
import PageNav from "../components/PageNav.jsx";

import UserAccountDetails from "../components/UserAccountDetails";
export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] text-white">
      <PageNav />
      <div className="flex p-4">
        <UserMenu />
        <UserAccountDetails />
      </div>
    </div>
  );
}
