function clickme(){
    var username=document.getElementById("User").value;
    var email=document.getElementById("email").value
    //var email_format= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var password =document.getElementById("pass").value;
   var confirm_pass=document.getElementById("cpass").value;
  
   if(username.length<5){
     alert("Username must be greater than 5 characters");
     
     return false;
   }
   if(email.indexOf('@')<=0){
      alert("Invalid email");
      document.getElementById("email").style.borderColor = "red";
    return false;
   }
   if(password.length<5){
       alert("Weak password");
       return false;
   }
   if(password!=confirm_pass){
       alert("Password do not match");
       return false;
   }
   
   else{
       alert("Form Submitted");
       
   }
}