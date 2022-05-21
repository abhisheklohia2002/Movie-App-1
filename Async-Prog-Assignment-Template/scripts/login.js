

var Info = JSON.parse(localStorage.getItem("Info"));
console.log(Info)


document.querySelector("#form").addEventListener("submit",runprogram);


function runprogram(){
    event.preventDefault();
    var password = form.password.value;

var email = form.email.value;

var map = Info[0];
// console.log(map)

if(map.inp3 == email && map.inp4 ==password){
    window.location.href = "index.html"

}
else {
    alert("invalid Credentials");
    
}
}
