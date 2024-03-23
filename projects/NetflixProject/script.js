












//asking laguage?

var sec = document.getElementById("container");
var desc = document.createElement("div");
var list = document.createElement("div");
list.className = "overflow"
sec.appendChild(desc);
sec.appendChild(list);
desc.id = "prefferedLang";
list.id = "listLang";
var text = document.createTextNode("Which languages do you like to watch shows and movies in?");
desc.appendChild(text);
// desc.style.fontSize = "2.5em";
var reason = document.createElement("p");
desc.appendChild(reason);
var reasonText = document.createTextNode("Letting us know helps set up your audio and subtitles You can always change these");
reason.id="innerReason";
reason.appendChild(reasonText);
var column1 = document.createElement("div");
column1.id="col1"
var column2 = document.createElement("div");
column2.id="col2"
column1.style.height = "90%";
column1.style.width = "48%";
column2.style.height = "90%";
column2.style.width = "48%";
list.append(column1);
list.append(column2);
// var eng = document.createElement("div");
// eng.style.height = "10%";
// eng.style.width = "100%";
// eng.innerText = "English";
// list.prepend(eng);


// creating language checkbox
var langList=["  Tamil","  Русский","  Portugues","  Filipino","  Hrvatski","  Français","  Magyar","  Українська","  Indonesia","  Svenska","  한국어","  Portugués","  Dansk","  Română",  "  Deutsch","  Español","  English","  Čeština","  العربية","  Tiếng Việt","  ไทย","  Norsk Bokmal","  العربية","  日本語","  Polski","  עברית","  Hindi","  Suomi","  Telugu","  Magyar"]
console.log(langList.length)
for (i=0; i<30; i++){
  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.className = "check";
  var languageName = document.createElement("label");
  languageName.innerText = langList[i] +"\n";
  if(i<15){
    col1.appendChild(input);
    col1.appendChild(languageName);
  }
  else{
    col2.appendChild(input);
    col2.appendChild(languageName);
  }
}
var move = document.createElement("button");
move.innerText = "Next";
move.className="input spl last";
language.append(move);


// image object
var selectFavImg = {
  0:"\'Images/favSelect movie/65.jpg\'",
  1:"\'Images/favSelect movie/365 days.jpg\'",
  2:"\'Images/favSelect movie/aadipurush.jpg\'",
  3:"\'Images/favSelect movie/all of us are dead.jpg\'",
  4:"\'Images/favSelect movie/beast.jpg\'",
  5:"\'Images/favSelect movie/bhool bhulayya.jpg\'",
  6:"\'Images/favSelect movie/big bang theory.jpg\'",
  7:"\'Images/favSelect movie/black mirror.jpg\'",
  8:"\'Images/favSelect movie/boss baby.jpg\'",
  9:"\'Images/favSelect movie/breaking bad.jpg\'",
  10:"\'Images/favSelect movie/bro.jpg\'",
  11:"\'Images/favSelect movie/business proposal.jpg\'",
  12:"\'Images/favSelect movie/cbi5.jpg\'",
  13:"\'Images/favSelect movie/chatterjee vs norway.jpg\'",
  14:"\'Images/favSelect movie/chor nikal.jpg\'",
  15:"\'Images/favSelect movie/demo slayer.jpg\'",
  16:"\'Images/favSelect movie/extraction.jpg\'",
  17:"\'Images/favSelect movie/extraction2.jpg\'",
  18:"\'Images/favSelect movie/f9.jpg\'",
  19:"\'Images/favSelect movie/fifty shades of grey.jpg\'",
  20:"\'Images/favSelect movie/friends.jpg\'",
  21:"\'Images/favSelect movie/gangubu.jpg\'",
  22:"\'Images/favSelect movie/gumraah.jpg\'",
  23:"\'Images/favSelect movie/guns and gulaabs.jpg\'",
  24:"\'Images/favSelect movie/heart of stone.jpg\'",
  25:"\'Images/favSelect movie/hidden love.jpg\'",
  26:"\'Images/favSelect movie/jamtara.jpg\'",
  27:"\'Images/favSelect movie/joothi.jpg\'",
  28:"\'Images/favSelect movie/kathal.jpg\'",
  29:"\'Images/favSelect movie/khakee.jpg\'",
  30:"\'Images/favSelect movie/king of the land.jpg\'",
  31:"\'Images/favSelect movie/kohrra.jpg\'",
  32:"\'Images/favSelect movie/lucifer.jpg\'",
  33:"\'Images/favSelect movie/lust stories.jpg\'",
  34:"\'Images/favSelect movie/maamannan.jpg\'",
  35:"\'Images/favSelect movie/manifest.jpg\'",
  36:"\'Images/favSelect movie/mission majnu.jpg\'",
  37:"\'Images/favSelect movie/money heist.jpg\'",
  38:"\'Images/favSelect movie/naruto shipuden.jpg\'",
  39:"\'Images/favSelect movie/naruto.jpg\'",
  40:"\'Images/favSelect movie/one piece.jpg\'",
  41:"\'Images/favSelect movie/peaky blinders.jpg\'",
  42:"\'Images/favSelect movie/raw.jpg\'",
  43:"\'Images/favSelect movie/rrr.jpg\'",
  44:"\'Images/favSelect movie/scoop.jpg\'",
  45:"\'Images/favSelect movie/she.jpg\'",
  46:"\'Images/favSelect movie/shezada.jpg\'",
  47:"\'Images/favSelect movie/sir.jpg\'",
  48:"\'Images/favSelect movie/soorvavanshi.jpg\'",
  49:"\'Images/favSelect movie/squid game.jpg\'",
  50:"\'Images/favSelect movie/stranger things.jpg\'",
  51:"\'Images/favSelect movie/the forest.jpg\'",
  52:"\'Images/favSelect movie/the good doctor.jpg\'",
  53:"\'Images/favSelect movie/the witcher.jpg\'",
  54:"\'Images/favSelect movie/theera kadhal.jpg\'",
  55:"\'Images/favSelect movie/uirupaksha.jpg\'",
  56:"\'Images/favSelect movie/vampire diaries.jpg\'",
  57:"\'Images/favSelect movie/veerappan.jpg\'",
  58:"\'Images/favSelect movie/waltair veerayya.jpg\'",
  59:"\'Images/favSelect movie/wednesday.jpg\'",
  60:"\'Images/favSelect movie/friends.jpg\'",
}
function setMail(){
  var addMail = localStorage.getItem("mailId");
  console.log(addMail);
  var mail = document.getElementById('getMail').value;
  console.log(mail);
  var usName = mail.slice(0,mail.indexOf('@'));
  
  if(addMail.includes(mail)){
    var addAgain = localStorage.getItem('users');
    console.log(addAgain);
    addAgain+=usName;
    localStorage.setItem("users", addAgain);
    alert('Please sign In!');
    
  }
  else{
    window.location.href='signin.html';
  }
  addMail+=mail;
  localStorage.setItem("mailId", addMail);
  
}




move.addEventListener("click", (event)=> {
  var select = "select any language";
  var list1 = document.getElementsByClassName("check");
  list1 = Object.entries(list1);
  if(list1.flat().filter((x)=>x.checked==true).length>0){
    desc.innerText = localStorage.getItem("userC")+", select 3 you like.";
    reason.innerText = "This helps us find TV shows and movies you'll love Select all the ones you like";
    desc.appendChild(reason);
    column1.remove();
    column2.remove();
    for (i=0; i<60; i++){
      var movieSelect = document.createElement("div");
      list.appendChild(movieSelect);
      movieSelect.className = "movieBox";
      movieSelect.style.backgroundImage = 'url('+selectFavImg[i]+')';
      movieSelect.style.backgroundSize = "100% 100%";
      // movieSelect.style.opacity = "0.5";
      // movieSelect.addEventListener('click',(e)=> e.target.style.opacity = ".5")
      // console.log(movieSelect)
    }
    var setMovie = document.getElementsByClassName("movieBox");
    for (poster of setMovie){
      poster.addEventListener('click',(e)=> {
        e.target.style.opacity = ".5";
        sessionStorage.setItem("val",e.target.backgroundImage.url);
  
      })

    }
    move.className="input spl last new";
    var nextStep = document.getElementsByClassName("new")[0];
    nextStep.addEventListener('click',(event)=>window.location.href='mainPage.html')
  }
  else{
    alert(select);
  }

})

// var trailer = document.getElementById("promo");
// trailer.addEventListener('load', ()=> {
//   if(trailer.muted){
//     trailer.muted = flase;
//   };
// })

































// // displaying other items none
// var item2  = document.getElementById("box2");
// item2.style.display = "none";
// var item3  = document.getElementById("box3");
// item3.style.display = "none";
// var item4  = document.getElementById("box4");
// item4.style.display = "none";
// var item5  = document.getElementById("box5");
// item5.style.display = "none";



// setting the given email as default for second page
// var defaultMail  = document.getElementById("default");
// defaultMail.innerText="charu";


// //highliting subscriptions
// var el1 = document.getElementsByClassName("mobile");
// var el2 = document.getElementsByClassName("basic");
// var el3 = document.getElementsByClassName("standard");
// var el4 = document.getElementsByClassName("premium");
// console.log(el1);
// console.log(el2);
// console.log(el3);
// console.log(el4);
// function mobileOption(){
//   el1[0].style.backgroundColor =  "#E50914";
//   el2[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   el3[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   el4[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   for(i=1; i<8; i++){
//     el1[i].style.color =  "#E50914";
//     el2[i].style.color = "rgb(165, 159, 159)";
//     el3[i].style.color = "rgb(165, 159, 159)";
//     el4[i].style.color = "rgb(165, 159, 159)";
//   }
// }
// function basicOption(){
//   el2[0].style.backgroundColor =  "#E50914";
//   el1[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   el3[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   el4[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   for(i=1; i<8; i++){
//     el2[i].style.color =  "#E50914";
//     el1[i].style.color = "rgb(165, 159, 159)";
//     el3[i].style.color = "rgb(165, 159, 159)";
//     el4[i].style.color = "rgb(165, 159, 159)";
//   }
// }
// function standardOption(){
//   el3[0].style.backgroundColor =  "#E50914";
//   el2[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   el1[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   el4[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   for(i=1; i<8; i++){
//     el3[i].style.color =  "#E50914";
//     el1[i].style.color = "rgb(165, 159, 159)";
//     el2[i].style.color = "rgb(165, 159, 159)";
//     el4[i].style.color = "rgb(165, 159, 159)";
//   }
// }
// function premiumOption(){
//   el4[0].style.backgroundColor =  "#E50914";
//   el2[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   el3[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   el1[0].style.backgroundColor =  "rgb(165, 159, 159)";
//   for(i=1; i<8; i++){
//     el4[i].style.color =  "#E50914";
//     el1[i].style.color = "rgb(165, 159, 159)";
//     el3[i].style.color = "rgb(165, 159, 159)";
//     el2[i].style.color = "rgb(165, 159, 159)";
//   }
// }





// mail validation
//  var mailContainer = ')( ][\|;:"><,/';
//       var mail = document.getElementById('getMail');
//       var check=false;
//       mail.addEventListener('change', (event) => {
//         var valueContent = event.target.value;
//         if(valueContent.endsWith('@gmail.com') || valueContent.endsWith('@yahoo.com') || valueContent.endsWith('@zohocorp.com')){
//          for (let char of mailContainer) {
//           if (valueContent.includes(char)) {
//             check = true;
//           }
//         }
//         if (check == true) {
//           mail.style.borderColor="red";
//         } 
//         else {
//             mail.style.borderColor="green";
//         }
//       }
//       else{
//         mail.style.borderColor="red";
//       }
//       });
      
      // showing answer
      function showfn1(){
        var element=document.getElementsByClassName("ans")[0];
        element.classList.toggle("block");
      }
      function showfn2(){
        var element=document.getElementsByClassName("ans")[1];
        element.classList.toggle("block");
      }
      function showfn3(){
        var element=document.getElementsByClassName("ans")[2];
        element.classList.toggle("block");
      }
      function showfn4(){
        var element=document.getElementsByClassName("ans")[3];
        element.classList.toggle("block");
      }
      function showfn5(){
        var element=document.getElementsByClassName("ans")[4];
        element.classList.toggle("block");
      }
      function showfn6(){
        var element=document.getElementsByClassName("ans")[5];
        element.classList.toggle("block");
      }



      
      // // displaying and erasing setting up
      // function changePage(){
      //   var item  = document.getElementById("box");
      //   var item2  = document.getElementById("box2");
      //   item.style.display = "none";
      //   item2.style.display = "";
      // }
      // function changePageTwo(){
      //   var item2  = document.getElementById("box2");
      //   var item3  = document.getElementById("box3");
      //   item2.style.display = "none";
      //   item3.style.display = "";
      // }
      // function changePageThree(){
      //   var item3  = document.getElementById("box3");
      //   var item4  = document.getElementById("box4");
      //   item3.style.display = "none";
      //   item4.style.display = "";
      //   var increaseSize = document.getElementById("steps");
      //   increaseSize.style.height = "125%";
      // }
      // function changePageFour(){
      //   var item4  = document.getElementById("box4");
      //   var item5  = document.getElementById("box5");
      //   item4.style.display = "none";
      //   item5.style.display = "";
      //   var increaseSize = document.getElementById("steps");
      //   increaseSize.style.height = "85%";
      // }



      


      // movie object


