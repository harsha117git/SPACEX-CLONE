function butMover(){
  
  document.getElementById("rbtbg").style.transform="translateY(-54px)";
  
}


function butout(){
  
 
  document.getElementById("rbtbg").style.transform="translateY(-108px)";
  
}

var scrollableElement = document.body; 

window.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    document.getElementById("header").style.opacity="1";
    document.getElementById("header").style.background="black";
    
  } 
  if(window.scrollY < 512 || window.screenY == 0){
    bg0();
  }
  if(window.scrollY > 512 ){
    document.getElementById("header").style.background="black";
    document.getElementById("header").style.opacity="1";
  }
 
  if(event.wheelDelta > 0 ){
    document.getElementById("header").style.opacity="1";
   
   
  }
  if(event.wheelDelta > 0 && window.screenY > 512 ){
    document.getElementById("header").style.opacity="1";
    document.getElementById("header").style.background="black";
   
  }
  if(event.wheelDelta > 0 && window.screenY < 512 ){
    document.getElementById("header").style.opacity="1";
    document.getElementById("header").style.background="none";
   
  }
  
  if(event.wheelDelta < 0){
    document.getElementById("header").style.opacity="0";
   
   
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}


function bg0(){
 

    document.getElementById("header").style.background="none";
    document.getElementById("header").style.opacity="1";
  
  console.log(scrollY);
}

  
const btn = document.getElementById('container');
const menu = document.getElementById('menu');
const hb=document.getElementsByClassName("open");

btn.addEventListener('click', navToggle);
hb.addEventListener('click', function movemenuin(){

});




function navToggle() {
  btn.classList.toggle('open');
  document.getElementById("menu").style.transform="translateX(-100px)";
  menu.classList.toggle('menuclass');
}
