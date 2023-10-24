import UserMenu from "../components/UserMenu";
import PageNav from "../components/PageNav.jsx";

import UserAccountDetails from "../components/UserAccountDetails";
export default function AppLayout() {
  return (
    <div className="h-screen overflow-hidden px-16 py-4 ">
      <PageNav />
      <div>
        <UserMenu />
        <UserAccountDetails />
      </div>
    </div>
  );
}
