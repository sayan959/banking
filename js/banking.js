document.getElementById('deposit-button').addEventListener('click',function() {
    // Get deposite input from html tag and convert it number
    const depositInputField = document.getElementById("deposit-input")
    const inputText = depositInputField.value;
    const newDepositeAmmount = parseFloat(inputText) ;


    // get pervious deposite number and convet it number
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositeText = depositTotal.innerText 
    const previousDepositeAmmount = parseFloat(previousDepositeText)
    // Add privious deposite with new deposit and update in previous deposite html tag
    const newDepositeTotal = previousDepositeAmmount + newDepositeAmmount;
    depositTotal.innerText = newDepositeTotal
    
    // Clear the input valu
    depositInputField.value = ''    
    
    // -----------------Balance section------------
    // update balance
    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceTotalAmmount = parseFloat(previousBalanceTotalText);
    const newBlanceTotal = previousBalanceTotalAmmount + newDepositeAmmount;

    previousBalanceTotal.innerText = newBlanceTotal;


})

//------------Withdraw Section------------

document.getElementById("withdra-button").addEventListener('click', function(){
    // Get withdra input from html tag and convert it number
    const withdrawInputField = document.getElementById('withdraw-input')
    const withdrawInputText = withdrawInputField.value;
    const newWithdraAmmount = parseFloat(withdrawInputText);

    //get previous withdraw number and convet it number
    const withdraTotal = document.getElementById('withdraw-total');
    const withdraTotalTaxt = withdraTotal.innerText;
    const previousWithdraTotalAmmount = parseFloat(withdraTotalTaxt);
    
     // Add privious wthidraw with new deposit and update in previous deposite html tag

     const newWritdrawTOtal = previousWithdraTotalAmmount + newWithdraAmmount;
     withdraTotal.innerText = newWritdrawTOtal;
    //clear the input valu
     withdrawInputField.value =''

    //-----------Withdraw Balance Section----------

    const preBlanceTotal = document.getElementById('balance-total');
    const preBlanceTotalText = preBlanceTotal.innerText;
    const preBlanceAmmount = parseFloat(preBlanceTotalText);
    const newBlanceTotal = preBlanceAmmount - newWithdraAmmount;
    preBlanceTotal.innerText =newBlanceTotal;





    
    

    
    
    
    
})
