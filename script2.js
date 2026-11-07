function data(){
let a = document.getElementById("username").value.trim();
let b = document.getElementById("phone-number").value.trim();
let c = document.getElementById("email").value.trim();
let d = document.getElementById("password").value;
let e = document.getElementById("confirm-password").value;

if(a === "" || b === "" || c === "" || d === "" || e === ""){
     alert("All the fields are required");
     return false;
}else if(a.length <= 6){
     alert("username should contain atleast 6 char");
     return false;
}else if(b.length !==10){
     alert("enter a valid phone number");
     return false;
}else if(d.length <=8){
     alert("password should contain atleat 8 char");
     return false;
}else if(e !== d){
     alert("password does not match");
     return false;
}
return true;
}


