const floatButton = document.getElementById('float-button'),
circularMenu = document.getElementById('circular-menu');
floatButton?.addEventListener('click', () => {
  floatButton.classList.toggle('pulsed');
  circularMenu.classList.toggle('expand');
});
document.getElementById('listNav').addEventListener('click', (e)=>{
const list =  document.getElementById('listNav');
switch (e.target.nodeName) {
  case 'A':                       
      list.getElementsByClassName('active')[0].classList.remove('active');
      e.target.classList.add('active');  
    break;
  case 'SPAN':           
      list.getElementsByClassName('active')[0].classList.remove('active');
      e.target.parentNode.classList.add('active'); 
    break;
  case 'svg':            
      list.getElementsByClassName('active')[0].classList.remove('active');
      e.target.parentNode.classList.add('active'); 
  break;
  case 'path':            
      list.getElementsByClassName('active')[0].classList.remove('active');
      e.target.parentNode.parentNode.classList.add('active'); 
  break;
}
});
function breakDiv(number, list){ 
  list.getElementsByClassName('active')[0].classList.remove('active');
  list.childNodes[number].childNodes[1].classList.add('active')
}
var timer = null;
document.getElementById('container').addEventListener('scroll', (e) => {
  clearTimeout(timer);
  //Renew timer
  timer = setTimeout(function () {
    let posiScroll = document.getElementById('container').scrollTop;
    let heightDiv = document.getElementById('presentation').clientHeight;
    let focusDiv = posiScroll / heightDiv;
    const list =  document.getElementById('listNav');
    switch (Math.round(focusDiv)) {
      case 0:                       
        breakDiv(1, list);
        break;
      case 1:
        breakDiv(3, list);  
        break;
      case 2:            
        breakDiv(3, list); 
      break;
      case 3:            
        breakDiv(5, list); 
      break;
      case 4:            
        breakDiv(7, list); 
      break;
    }
  }, 150);
}, true);

const breakdownButton = document.querySelectorAll('.link__arrow');
breakdownButton.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    
  });
});


const arrows = document.querySelectorAll('.link__arrow');
arrows.forEach(arrow => {arrow.addEventListener('click', (e)=> {
    console.log(e.target.parentNode);
  })
})