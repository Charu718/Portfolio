
// sessionStorage.setItem("name", []);
// var user = sessionStorage.getItem('name');
// function nextPage(){
//     var username;
// var cookie = {};
// var funRet;
// var button = document.getElementsByClassName('spl')[0];

// button.addEventListener('click', ()=>{
//   username = document.getElementsByClassName('input')[0].value;
//   console.log(username)
//   funRet = getCookie();
// })
// function getCookie(){
  
//   // var coo = document.cookie.split(/[:;=]/).map(x=> x.trim());
//   var coo = sessionStorage.getItem("name");
//   console.log(coo)
//   // for (i=0; i<coo.length; i++){
//   //   cookie[coo[i]] = coo[i+1];
//   // }
//   // funRet =  (cookie.logged == 'true')? true : false;
//   funRet = (coo=='' || coo==null || !coo.includes(username))? false:true;
//   console.log(funRet)
//   check();
// }

// console.log(funRet);
// // function setCookie(){
//   // document.cookie = `key=${username}`;
// // }
// // setCookie();
// function check(name,value){
//     name = username;
//   if(funRet){
    
//     //  var saveUser = userList;
//     //  saveUser.push(name);
//     //  console.log(saveUser)
//     // user = user + username;
//     sessionStorage.setItem("name", user.push(name));
//     alert('Welcome '+name);
//     window.location.href='mainPage.html';
//   }
//   else{
//     // userList.push(name);
//     // var saveUser = userList;
//     // saveUser.push(name);
//     // console.log(saveUser)
//     user = user + username;
//     sessionStorage.setItem("name", user.push(name));
//     alert('please login')
//     window.location.href='index.html' 
//   }
// }
// }











// // function nextPage(){
//     var username;
// var cookie = {};
// var logged;
// var button = document.getElementsByClassName('spl')[0];

// button.addEventListener('click', ()=>{
//   username = document.getElementsByClassName('input')[0].value;
//   // console.log(username)
//   // funRet = getCookie();
//   // check();
//   getCookie();
//   check();
// })
// function getCookie(){
  
//   var coo = document.cookie.split(/[:;=]/).map(x=> x.trim());
  
//   for (i=0; i<coo.length; i+=2){
//     cookie[coo[i]] = coo[i+1];
//   }
//   // return (cookie.logged == 'true')? true : false;
  
// }

// function setCookie(key,value){
//   document.cookie = `${key}=${value}`;
// }
// function check(){
//   logged = (cookie.logged == 'true')? true : false;
//   if (logged){
//     alert('Welcome'+username);
//     // window.location.href='mainPage.html';
//   }
//   else{
//     setCookie('logged', 'false');
//     logged = false;
//     alert('please login')
//     // window.location.href='index.html' 
//   }
// }
// // }





var button = document.getElementsByClassName('spl')[0];
var userList=localStorage.getItem('users');
button.addEventListener('click', ()=>{
  username = document.getElementsByClassName('input')[0].value;
  localStorage.setItem('userC', username);
  if(userList.includes(username)){
    alert('welcome back '+username);
    window.location.href='mainPage.html';
  }
  else{
    alert('Please login ');
    userList+=username;
  localStorage.setItem('users', userList);
  window.location.href='index.html' 
  }
  
})
