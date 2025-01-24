// DOM Elements
const balanceEl = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

// Initial Balance
let balance = 0;

// Update Balance Display
function updateBalance() {
  balanceEl.textContent = balance.toFixed(2);
}

// Deposit Function
depositBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    Swal.fire("Invalid Amount", "Please enter a valid deposit amount.", "error");
    return;
  }

  balance += amount;
  updateBalance();
  Swal.fire("Success", `You deposited ${amount.toFixed(2)} SOL.`, "success");
  amountInput.value = "";
});

// Withdraw Function
withdrawBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    Swal.fire("Invalid Amount", "Please enter a valid withdrawal amount.", "error");
    return;
  }

  if (amount > balance) {
    Swal.fire("Insufficient Funds", "You don't have enough balance.", "error");
    return;
  }

  balance -= amount;
  updateBalance();
  Swal.fire("Success", `You withdrew ${amount.toFixed(2)} SOL.`, "success");
  amountInput.value = "";
});

// Initialize
updateBalance();
