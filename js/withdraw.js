document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-feild');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    const previousWithdrawTotal = document.getElementById('withdraw-total');
    const previousBalanceTotalstring = previousWithdrawTotal.innerText;
    const newPreviousWithdrawTotal = parseFloat(previousBalanceTotalstring);
    // console.log(newPreviousWithdrawTotal);
    const newWithdrawTotalAmount = newPreviousWithdrawTotal + newWithdrawAmount;
    previousWithdrawTotal.innerText = newWithdrawTotalAmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalString);

    const updateBalanceTotal = newBalanceTotal - newWithdrawTotalAmount;
    balanceTotal.innerText = updateBalanceTotal;
    


    withdrawField.value = '';
});

