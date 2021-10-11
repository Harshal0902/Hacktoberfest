function calculate(){

    // parsing values of text feild inputs by user.
    const principalAmount = parseInt(document.form.loanAmount.value);
    const intRate = parseInt(document.form.rate.value);
    const tenure = parseInt(document.form.duration.value);

    // This formula is taken from Times of India News Paper
    // where EMI = P.r.(1+r)^tenure / ((1+r)^tenure - 1)
    
    // formula stated that r must be used as (InputRATE/12/100).
    let rate = intRate/12/100;

    // using pow function in order to get the squares.
    let r1plus = Math.pow((1+rate),tenure);
    let r1minus = ((Math.pow((1+rate), tenure))-1);
    
    // Final Calculations
    let emi = Math.floor((principalAmount *rate* r1plus/r1minus));
    document.querySelector(".display").value=emi + " Per Month";

    let totalPayment = emi*tenure;
    document.querySelector(".totalPayment").value= "Your Total Payment is "+(totalPayment)+" ."
    document.querySelector(".interest").value= "Your Total Interest Amount is "+(totalPayment-principalAmount)+" ."

    
}