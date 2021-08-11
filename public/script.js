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

var timer = null;
document.getElementById('container').addEventListener('scroll', (e) => {
  clearTimeout(timer);
  //Renew timer
  timer = setTimeout(function () {
    let posiScroll = document.getElementById('container').scrollTop;
    let heightDiv = document.getElementById('presentation').clientHeight;
    let focusDiv = posiScroll / heightDiv;
    const list =  document.getElementById('listNav');
    switch (focusDiv) {
      case 0:                       
        list.getElementsByClassName('active')[0].classList.remove('active');
        list.childNodes[1].childNodes[1].classList.add('active')
        break;
      case 1:
        list.getElementsByClassName('active')[0].classList.remove('active');           
        list.childNodes[3].childNodes[1].classList.add('active');     
        break;
      case 2:            
        list.getElementsByClassName('active')[0].classList.remove('active');   
        list.childNodes[3].childNodes[1].classList.add('active');
      break;
      case 3:            
        list.getElementsByClassName('active')[0].classList.remove('active');   
        list.childNodes[5].childNodes[1].classList.add('active');
      break;
      case 4:            
        list.getElementsByClassName('active')[0].classList.remove('active');   
        list.childNodes[7].childNodes[1].classList.add('active');
      break;
    }
    console.log(focusDiv);

  }, 200);
});
