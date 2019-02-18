const deep = document.querySelector('#deep');
const trg1 = document.querySelector('#trg1');
const trg2 = document.querySelector('#trg2');
const parallax = document.querySelector('.parallax');
const title = document.querySelector('#title');
const titleP = title.querySelector('p');
const plane = document.querySelector('#plane');

trg1.addEventListener('click', ()=> {
    console.log('fuck off')
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
 const starteffect = (triger, target, effectin, effectout) => {
    let animationCount = 0;
    parallax.addEventListener('scroll', function(){
        if (isElementInViewport(triger) === false) {
            console.log(isElementInViewport(triger))
            target.classList.remove(effectout);
            target.classList.add(effectin);
            setTimeout(function(){ animationCount = 1; }, 10);
           
        } else {
            if(animationCount === 1) {
                target.classList.remove(effectin);
                target.classList.add(effectout);
                setTimeout(function(){ animationCount = 0; }, 10);
    
            } else if (animationCount === 0) {
            } else {}
    
        }
    });
 } 

starteffect(trg1, deep,'bcgBig', 'bcgSmall');
starteffect(titleP, plane, 'planeIn','-' )
