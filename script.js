

function tipCal(){
const amount=document.querySelector("#price").value;
const tip=document.querySelector("#tip").value;
const tipAmountOfBill=(amount*tip)/100;
const totalAmount=parseInt(amount)+parseInt(tipAmountOfBill);
document.getElementById("totaltip").value=tipAmountOfBill.toFixed(2);
document.getElementById("totalamount").value=totalAmount.toFixed(2);


            
}
