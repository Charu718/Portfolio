var right='flase';
var pass = document.getElementsByClassName("input")[2];
console.log(pass)
pass.addEventListener('change',()=>{
  // console.log(e.tartget)
  var pattern = /([a-z A-Z]+)([0-9]+)/g;
  if(pattern.test(pass.value)){
    right = "rig";
  }
  else{
    alert("Make your password strong!!");
  }
})









// displaying other items none
var item2  = document.getElementById("box2");
item2.style.display = "none";
var item3  = document.getElementById("box3");
item3.style.display = "none";
var item4  = document.getElementById("box4");
item4.style.display = "none";
var item5  = document.getElementById("box5");
item5.style.display = "none";

//highliting subscriptions
var el1 = document.getElementsByClassName("mobile");
var el2 = document.getElementsByClassName("basic");
var el3 = document.getElementsByClassName("standard");
var el4 = document.getElementsByClassName("premium");
console.log(el1);
console.log(el2);
console.log(el3);
console.log(el4);
function mobileOption(){
  el1[0].style.backgroundColor =  "#E50914";
  el2[0].style.backgroundColor =  "rgb(165, 159, 159)";
  el3[0].style.backgroundColor =  "rgb(165, 159, 159)";
  el4[0].style.backgroundColor =  "rgb(165, 159, 159)";
  for(i=1; i<8; i++){
    el1[i].style.color =  "#E50914";
    el2[i].style.color = "rgb(165, 159, 159)";
    el3[i].style.color = "rgb(165, 159, 159)";
    el4[i].style.color = "rgb(165, 159, 159)";
  }
}
function basicOption(){
  el2[0].style.backgroundColor =  "#E50914";
  el1[0].style.backgroundColor =  "rgb(165, 159, 159)";
  el3[0].style.backgroundColor =  "rgb(165, 159, 159)";
  el4[0].style.backgroundColor =  "rgb(165, 159, 159)";
  for(i=1; i<8; i++){
    el2[i].style.color =  "#E50914";
    el1[i].style.color = "rgb(165, 159, 159)";
    el3[i].style.color = "rgb(165, 159, 159)";
    el4[i].style.color = "rgb(165, 159, 159)";
  }
}
function standardOption(){
  el3[0].style.backgroundColor =  "#E50914";
  el2[0].style.backgroundColor =  "rgb(165, 159, 159)";
  el1[0].style.backgroundColor =  "rgb(165, 159, 159)";
  el4[0].style.backgroundColor =  "rgb(165, 159, 159)";
  for(i=1; i<8; i++){
    el3[i].style.color =  "#E50914";
    el1[i].style.color = "rgb(165, 159, 159)";
    el2[i].style.color = "rgb(165, 159, 159)";
    el4[i].style.color = "rgb(165, 159, 159)";
  }
}
function premiumOption(){
  el4[0].style.backgroundColor =  "#E50914";
  el2[0].style.backgroundColor =  "rgb(165, 159, 159)";
  el3[0].style.backgroundColor =  "rgb(165, 159, 159)";
  el1[0].style.backgroundColor =  "rgb(165, 159, 159)";
  for(i=1; i<8; i++){
    el4[i].style.color =  "#E50914";
    el1[i].style.color = "rgb(165, 159, 159)";
    el3[i].style.color = "rgb(165, 159, 159)";
    el2[i].style.color = "rgb(165, 159, 159)";
  }
}




// displaying and erasing setting up
function changePage(){
    var item  = document.getElementById("box");
    var item2  = document.getElementById("box2");
    item.style.display = "none";
    item2.style.display = "";
  }
  







// function checkUser() {
//     var getCookie = storage();
//     if (getCookie == '') {
//         setCookie();
//         alert('Welcome, ' + getCookie.split('=')[1] + '!');
//     } 
//     else {
//         alert('Welcome Again');
//     }
// }
// function storage()  {
//     return document.cookie;
// }

// checkUser();


Users = JSON.parse(localStorage.getItem('Users'));

  function changePageTwo(){
    var getName = document.getElementById("default").value;
    var pass = document.getElementById("pass").value;
    var item2  = document.getElementById("box2");
    var item3  = document.getElementById("box3");
    if((getName!=''||pass!='')&&right=='rig'){
      item2.style.display = "none";
      item3.style.display = "";
      localStorage.setItem("userC", getName);
    sessionStorage.setItem("password", pass);
    var userMail = localStorage.getItem('mailId');
    var newUser = {
      name: sessionStorage.getItem('name'),
      mail: userMail,
      password: sessionStorage.getItem('password')

    }
    console.log(newUser);
    Users[newUser.name] = newUser;
    console.log(Users);
    // newUser = JSON.stringify(newUser);
    localStorage.setItem('Users', JSON.stringify(Users));
    }
    
  }
  function changePageThree(){
    var item3  = document.getElementById("box3");
    var item4  = document.getElementById("box4");
    item3.style.display = "none";
    item4.style.display = "";
    var increaseSize = document.getElementById("steps");
    increaseSize.style.height = "125%";
  }
  function changePageFour(){
    var item4  = document.getElementById("box4");
    var item5  = document.getElementById("box5");
    item4.style.display = "none";
    item5.style.display = "";
    var increaseSize = document.getElementById("steps");
    increaseSize.style.height = "85%";
  }
