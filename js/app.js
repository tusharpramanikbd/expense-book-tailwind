
// Global variables
let foodExpense, rentExpense, clothesExpense, income;


// Calculate button click event listener
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function (){
  if(isIncomeValid() && isExpenseValid()){
    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    const totalExpensesText = document.getElementById("total-expense");
    totalExpensesText.innerText = totalExpenses;

    const balance = income - totalExpenses;
    if(balance < 0){
      showModal("balance can not be negative!!!");
    }
    else{
      const balanceText = document.getElementById("balance");
      balanceText.innerText = balance;
    }
  }
})

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