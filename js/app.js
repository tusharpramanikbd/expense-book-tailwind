
// Global variables
let foodExpense, rentExpense, clothesExpense, income, totalExpensesText, balanceText, savingsText, balance;


// Calculate button click event listener
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function (){
  if(isIncomeValid() && isExpenseValid()){
    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    balanceText = document.getElementById("balance");
    totalExpensesText = document.getElementById("total-expense");
    totalExpensesText.innerText = totalExpenses.toFixed(2);

    balance = income - totalExpenses;
    if(balance < 0){
      showModal("Total expense can not be greater than income!!!");
      clearInput();
    }
    else{
      balanceText.innerText = balance.toFixed(2);
    }
  }
})

// Saving button click event listener
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function(){
  if(isSavingsValid()){
    const savingsAmount = (income * savingsText) / 100;

    if(savingsAmount > balance){
      showModal("Savings amount can not be greater than balance!!!");
    }
    else{
      document.getElementById("savings").innerText = savingsAmount.toFixed(2);

      const remainingBalance = balance - savingsAmount;
      document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);
    }
  }
})

// This function is checking if the savings input valid or not
function isSavingsValid(){
  savingsText = document.getElementById("save").value.trim();
  if(savingsText === ""){
    showModal("Savings can not be empty!!!");
    return false
  }
  if(isNaN(savingsText)){
    showModal("Please enter valid savings!!!");
    return false
  }
  savingsText = parseFloat(savingsText);
  if(savingsText < 0){
    showModal("Savings can not be negative!!!");
    return false;
  }
  if(savingsText > 100){
    showModal("Savings can not be greater than 100%!!!");
    return false;
  }
  return true;
}

// This function clearing the input field on wrong input
function clearInput(){
  document.getElementById("food").value = "";
  document.getElementById("rent").value = "";
  document.getElementById("clothes").value = "";
  totalExpensesText.innerText = "000";
  balanceText.innerText = "000";
}

// This function is checking if the expenses input valid or not
function isExpenseValid(){
  foodExpense = document.getElementById("food").value.trim();
  if(foodExpense === ""){
    foodExpense = 0;
  }
  if(isNaN(foodExpense)){
    showModal("Please enter valid food expense!!!");
    return false
  }
  foodExpense = parseFloat(foodExpense);
  if(foodExpense < 0){
    showModal("Food Expense can not be negative!!!");
    return false;
  }

  rentExpense = document.getElementById("rent").value.trim();
  if(rentExpense === ""){
    rentExpense = 0;
  }
  if(isNaN(rentExpense)){
    showModal("Please enter valid rent expense!!!");
    return false
  }
  rentExpense = parseFloat(rentExpense);
  if(rentExpense < 0){
    showModal("Rent Expense can not be negative!!!");
    return false;
  }

  clothesExpense = document.getElementById("clothes").value.trim();
  if(clothesExpense === ""){
    clothesExpense = 0;
  }
  if(isNaN(clothesExpense)){
    showModal("Please enter valid rent expense!!!");
    return false
  }
  clothesExpense = parseFloat(clothesExpense);
  if(clothesExpense < 0){
    showModal("Rent Expense can not be negative!!!");
    return false;
  }
  
  return true;
}

// This function is checking if the income is valid or not
function isIncomeValid(){
  income = document.getElementById("income").value.trim();
  if(income === ""){
    showModal("Income can not be empty!!!");
    return false
  } 
  if(isNaN(income)) {
    showModal("Please enter valid income!!!");
    return false;
  }
  income = parseFloat(income);
  if(income < 0){
    showModal("Income can not be negative!!!");
    return false;
  }
  return true;
}

// This function is showing the error modal with error message
function showModal(errorMsg){
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("show-overlay");
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.classList.add("show-modal");

  const errorText = document.querySelector(".error-msg");
  errorText.innerText = errorMsg;

  const okayBtn = document.querySelector(".okay-btn");
  okayBtn.addEventListener("click", function(){
    overlay.classList.remove("show-overlay");
    modalContainer.classList.remove("show-modal");
  })
}