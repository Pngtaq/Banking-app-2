export default function UserMenu() {
  return (
    <div>
      <div>
        <div>
          <img src="/images/logo.png" />
          <div>
            <p>Name: John Raison V. Salvador</p>
            <p>Account number: 2132131312</p>
          </div>
        </div>
        <div>
          <button>Deposit</button>
          <button>Withdraw</button>
          <button>Loan</button>
          <button>Transfer</button>
        </div>
      </div>

      <div>
        <button className="btn">Logout</button>
      </div>
    </div>
  );
}
