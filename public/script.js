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


var positScroll = 0;
/*  Checked Radio button */
const radios = document.querySelectorAll('.portfolio__inp');
radios?.forEach(radio => {radio.addEventListener('change', (e, positScroll)=> {
        const cards = document.querySelectorAll(".box__portfolio");
        
        for (card of cards) {
          if( e.target.getAttribute('attr-data') === "all"){
              for (all of cards) {              
                all.classList.remove('none');
                all.classList.add('active')
              }
            break;
          }
          if(card.getAttribute('attr-data') === e.target.getAttribute('attr-data')){
              card.classList.remove('none');   
              card.classList.add('active');         
          }else{
            card.classList.add('none');
            card.classList.remove('active');  
          }                     
        }
        document.getElementById('portfBox').scrollLeft = 0;
        this.positScroll = 0;
  })
})

let arrows = document.querySelectorAll('.link__arrow');
arrows.forEach(arrow => {arrow.addEventListener('click', (e)=> {
  let option = e.target.classList[0];
  let widthDiv = document.querySelectorAll('.box__portfolio.active')[0].clientWidth; 
  let portfBox = document.getElementById('portfBox');
  /* console.log("ancho del width " + portfBox.scrollWidth);
  console.log("Posición de scroll"+ positScroll); */
  let maxCont = portfBox.scrollWidth;
  const minCont = 0;
  switch(option){
    case 'right':
      /* portfBox.scrollLeft +=widthDiv; */
      /* console.log("ancho Inicial " + widthDiv); */
      let Sum = this.positScroll + (widthDiv + 20);      
      portfBox.scroll({      
        left: Sum > maxCont ? this.positScroll : this.positScroll += widthDiv,
        behavior: 'smooth'
      });
    break; 
    case 'left':
      /* portfBox.scrollLeft -=widthDiv; */
      let Rest = this.positScroll - (widthDiv - 20);      
       portfBox.scroll({
        left: Rest > minCont ? this.positScroll -= widthDiv : this.positScroll,
        behavior: 'smooth'
      });
    break;    
    }

  });
});