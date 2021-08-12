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
const arrows = document.querySelectorAll('.link__arrow');
const portfBox = document.getElementById('portfBox');
arrows.forEach(arrow => {arrow.addEventListener('click', (e)=> {
    const Box = document.getElementById('portfBox');
    let posiScroll = Box.scrollLeft;
    let widthDiv =   document.getElementById('boxPortf').clientWidth;
    let focusDiv =   posiScroll / widthDiv;

    const childNodes =document.querySelectorAll('#portfBox > .box__portfolio');
    const nodeFocus = childNodes[Math.round(focusDiv)];
    /* console.log("ancho del box hijo " + widthDiv); */   
    /* console.log("focus div horizontal" + focusDiv); */   
  let option = e.target.classList[0];

  let preview  =(  nodeFocus.offsetLeft - widthDiv  +20);
  let next = (widthDiv+ nodeFocus.offsetLeft + 20) ;
  switch(option){
    case 'left':
      /* console.log("foco en nodo " + nodeFocus.offsetLeft ); */
       portfBox.scroll({
        left: preview,
        behavior: 'smooth'
      });
    break;
    case 'right':
      portfBox.scroll({        
        left: next,
        behavior: 'smooth'
      });
    break;
    }
  });
});