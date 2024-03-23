document.getElementById("vid").style.transform = 'scale(0)';
window.addEventListener('load', ()=>{
  document.getElementById("vid").style.transform = 'scale(1)';
  document.getElementById("vid").style.transition = '1s';
})
var rwItm = document.getElementsByClassName('rwItm');
function selected(){
    var idOfElement =localStorage.getItem("idElem");
    var elem = document.getElementById(idOfElement); 
    console.log(idOfElement);
    // window.location.href='movie.html';
    var sourceVideo = localStorage.getItem("videoUrl");
    
    // for (var ele of movie){
    //   if(ele.name == idOfElement){
    //     var sourceVideo = ele.videoSource;
    //   }
    // }
    vid.style.height = "100%";
    vid.style.width = "100%";
    vid.src = sourceVideo;
  }
  selected();
  var myVid = document.getElementById("vid");
  myVid.ontimeupdate = function(){
    sessionStorage.setItem("time",myVid.currentTime);
  }
  document.getElementsByClassName('fa-arrow-left')[0].addEventListener('click', () => {
    window.location.href = 'moviePreview.html';
})
  
  // if(myVid.paused){
  //   document.getElementsByClassName('overlay')[0].style.display='';
  // }
  // else{
  //   document.getElementsByClassName('overlay')[0].style.display='none';
  // }
  // document.getElementsByClassName('overlay')[0].addEventListener('click', ()=>myVid.paused = false)