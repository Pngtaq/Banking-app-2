import UserMenu from "../components/UserMenu";
import PageNav from "../components/PageNav.jsx";

import UserAccountDetails from "../components/UserAccountDetails";
export default function AppLayout() {
  return (
    <div>
      <PageNav />
      <div>
        <UserMenu />
        <UserAccountDetails />
      </div>
    </div>
  );
}
