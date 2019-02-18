const wraper = document.querySelector('.wraper');
const btn1 = document.querySelector('#btn1');
const serious_stuff = document.querySelector('#serious_stuff');
const item2 = document.querySelector('#item2');

btn1.addEventListener('click', ()=>{
    console.log('picz');

})


function isElementInViewport(x) {
    var rect = x.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
  }
 const animationInOut = (triger, target) => {
    let animationCount = 0;
    window.addEventListener("scroll", function(){
        if (isElementInViewport(triger) === true) {
            console.log(isElementInViewport(btn1))
            target.classList.remove('orange_bye');
            target.classList.add('orange');
            setTimeout(function(){ animationCount = 1; }, 2000);
           
        } else {
            if(animationCount === 1) {
                target.classList.remove('orange');
                target.classList.add('orange_bye');
                setTimeout(function(){ animationCount = 0; }, 2000);
    
            } else if (animationCount === 0) {
                console.log('nothing to do')
            } else {}
    
        }
    });
 }
 const xyz = (triger, target) => {
    let animationCount = 0;
    window.addEventListener("scroll", function(){
        if (isElementInViewport(triger) === false) {
            console.log(isElementInViewport(btn1))
            target.classList.remove('bcgSmall');
            target.classList.add('bcgBig');
            setTimeout(function(){ animationCount = 1; }, 2000);
           
        } else {
            if(animationCount === 1) {
                target.classList.remove('bcgBig');
                target.classList.add('bcgSmall');
                setTimeout(function(){ animationCount = 0; }, 2000);
    
            } else if (animationCount === 0) {
                console.log('nothing to do')
            } else {}
    
        }
    });
 } 

 animationInOut(btn1, serious_stuff)
 xyz(btn1, wraper)