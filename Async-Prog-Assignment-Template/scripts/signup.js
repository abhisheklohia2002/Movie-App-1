document.getElementById("form").addEventListener("submit",runprogram);
let i = 1;
function runprogram(){
   
    event.preventDefault();
  let name = form.name.value;
let number = form.number.value;
let email = form.email.value;
let password = form.password.value;


var data = JSON.parse(localStorage.getItem("Info")) || [];

const obj = {
    inp1 : name,
    inp2 : number,
    inp3:email,
    inp4: password
};

data.push(obj);





if(""!= obj.inp1 && "" != obj.inp2 && "" != obj.inp3 && "" != obj.inp3 && "" !=obj.inp4){
    localStorage.setItem("Info",JSON.stringify(data));
    window.location.href = "login.html";

}


}