// Display input into the span 

const inputFirstname = document.getElementById("firstname");
const displayFirstname = document.getElementById("display-firstname");

inputFirstname.addEventListener("keyup", function() {
  displayFirstname.textContent = inputFirstname.value;
});

// if age is higher than 18 then display text

const age = document.getElementById("age");
const hard_truth = document.getElementById("a-hard-truth");
age.addEventListener("keyup",function(){
    if (age.value >= 18){
        hard_truth.style.visibility = "visible"; 
    }else{
        alert("Too young");
    }
});
//change border color when the pwd is to small and change bg color when the pwd dsnt match 

const pwd = document.getElementById("pwd");
const pwd_confirm = document.getElementById("pwd-confirm");

pwd.addEventListener("keyup", function(){
    if (pwd.value.length < 6){
        pwd.style.borderColor = "red";
    }else{
        pwd.style.borderColor = "initial";
    }

});

pwd_confirm.addEventListener("keyup", function(){
    if (pwd_confirm.value.length < 6){
        pwd_confirm.style.borderColor = "red";
    }else{
        pwd_confirm.style.borderColor = "initial";
    }
    if (pwd.value !== pwd_confirm.value){
        pwd_confirm.style.backgroundColor = "red";
        pwd.style.backgroundColor = "red";
    }else{
        pwd_confirm.style.backgroundColor = "initial";
        pwd.style.backgroundColor = "initial";
    }
});

//change background and text color 

const changeMode = document.getElementById("toggle-darkmode");
const body = document.querySelector("body"); 

changeMode.addEventListener("change", function(){
    if (changeMode.value === "dark") {
        body.style.backgroundColor = "black";
        body.style.color ="white";
    } else if (changeMode.value === "light") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});

//bonus



