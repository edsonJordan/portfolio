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


    const appUl = document.getElementById('appUl');
    let appActive = appUl.getElementsByClassName('active');
    const appChilds =document.querySelectorAll('#appUl > .appnav__li');

    switch (Math.round(focusDiv)) {
      case 0:                       
        breakDiv(1, list);
        appActive[0].classList.remove('active');
        appChilds[1].classList.add('active');
        break;
      case 1:
        breakDiv(3, list);
        appActive[0].classList.remove('active');
        appChilds[2].classList.add('active');  
        break;
      case 2:            
        breakDiv(3, list); 
        appActive[0].classList.remove('active');
        appChilds[3].classList.add('active');
      break;
      case 3:            
        breakDiv(5, list); 
        appActive[0].classList.remove('active');
        appChilds[4].classList.add('active');
      break;
      case 4:            
        breakDiv(7, list); 
        appActive[0].classList.remove('active');
        appChilds[5].classList.add('active');
      break;
    }
  }, 250);
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
  let option = e.target.classList[0];

  let preview  =(  nodeFocus.offsetLeft - widthDiv - 20);
  let next = (widthDiv+ nodeFocus.offsetLeft + 20) ;
  switch(option){
    case 'left':
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
/* Events clicks points  */
const points = document.querySelectorAll('.point__card');
points?.forEach(point => {point.addEventListener('click', (e)=> {
  if(e.target.nodeName == "LABEL"){      
      let parentCard = document.getElementById('boxCard');
      e.target.parentNode.getElementsByClassName('active')[0].classList.remove('active');
      e.target.classList.add('active');
      let pointSele= e.target.getAttribute('attr-order');
      let focusSelet = parentCard.getElementsByClassName('card')[pointSele];
      boxCard.scroll({
        left:focusSelet.offsetLeft,
        behavior: 'smooth'
      });
    }  
  })
})

/* Scroll horizontal Box Card */
var timeCard = null;
document.getElementById('boxCard')?.addEventListener('scroll', (e) => {
  clearTimeout(timeCard);
  //Renew timer
  timeCard = setTimeout(function () {
    const listPoint = document.getElementById('pointCard');
    let posiScroll = document.getElementById('boxCard').scrollLeft;
    let widthDiv = document.getElementById('database').clientWidth;
    let focusDiv = posiScroll / widthDiv;
    let selectPoint = listPoint.getElementsByTagName('label')[Math.round(focusDiv)];
    listPoint.getElementsByClassName('active')[0].classList.remove('active');
    selectPoint.classList.add('active')
  }, 250);
}, true);