import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import History from "./components/History";
import { useEffect } from "react";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Transfer from "./components/Transfer";
import Loan from "./components/Loan";

// import { useEffect } from "react";

function App() {
  useEffect(function () {
    fetch("http://localhost:8000/accounts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="applayout" element={<AppLayout />}>
          <Route index element={<Navigate replace to="history" />} />
          <Route index path="deposit" element={<Deposit />} />
          <Route index path="loan" element={<Loan />} />
          <Route index path="withdraw" element={<Withdraw />} />
          <Route index path="transfer" element={<Transfer />} />
          <Route index path="history" element={<History />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
