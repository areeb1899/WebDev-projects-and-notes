//calculate tip
function calculateTip() {
  var billAmount=document.getElementById("billamount").value;
  var serviceQuality=document.getElementById("servicequality").value;
  var peopleAmount=document.getElementById("peopleamount").value;
  
  //vaidate input
 if (billAmount==="" || serviceQuality== 0) {
	 
	 alert ("Please insert the values");
    return;
 }
 
 //check to see if this works when we don't put any value in Number of People column
	
if (peopleAmount==="" || peopleAmount <= 1)  {
   peopleAmount=1;	

    document.getElementById("each").style.display="none";
    }  
   alert {
   document.getElementById("each").style.display="block";
   }
  
 //calculate tip

  var total=(billAmount * serviceQuality) / peopleAmount;
  
  //round off
   total= Math.round(total);
   
  //display the tip
  document.getElementById("tipcontainer").style.display= "block";
  document.getElementById("tip").innerHTML = total;  
  
}
//hide the tip amount on load
document.getElementById("tipcontainer").style.display="none";
document.getElementById("tip").style.display="none";




//click to call the function
document.getElementById("calculate").onclick=function() {
   calculateTip();
}
  
  
  
  
  
  
  
  