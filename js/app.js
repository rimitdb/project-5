function expenseCalBtn() {
    const incomeInput = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothesInput = document.getElementById('clothes-input').value;
    const previousExpenses = document.getElementById('total-expense').innerText;
    const newExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    let totalExpenses = parseFloat(previousExpenses) + newExpenses;
    const previousTotalExpense = document.getElementById('total-expense');
    previousTotalExpense.innerText = totalExpenses;
    const previousBalance = document.getElementById('balance');
    const balance = parseFloat(incomeInput) - totalExpenses;
    previousBalance.innerText = balance;
    incomeInput.value = '';
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';

}

function saving() {
    const savePercentige = document.getElementById('save-input').value;
    const incomeInput = document.getElementById('income-input').value;
    let savingAmount = (parseFloat(incomeInput) * parseInt(savePercentige)) / 100;
    const previousSavingAmount = document.getElementById('saving-amount');
    previousSavingAmount.innerText = savingAmount;
    let remainingBalance = document.getElementById('remaining-balance');
    const previousBalance = document.getElementById('balance');
    const newRemainingBalance = parseFloat(previousBalance) - parseFloat(savingAmount);
    remainingBalance.innerText = newRemainingBalance;

    // console.log(remainingBalance);
}
