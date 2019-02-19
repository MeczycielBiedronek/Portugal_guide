const deep = document.querySelector('#deep');
const trg1 = document.querySelector('#trg1');
const trg2 = document.querySelector('#trg2');
const trg3 = document.querySelector('#trg3');
const trg4 = document.querySelector('#trg4');
const trg5 = document.querySelector('#trg5');
const trg6 = document.querySelector('#trg6');
const trg7 = document.querySelector('#trg7');
const parallax = document.querySelector('.parallax');
const title = document.querySelector('#title');
const titleP = title.querySelector('p');
const plane = document.querySelector('#plane');
const track = document.querySelector('#track');
const coimbra = document.querySelector('.coimbra');
const nazare = document.querySelector('.nazare');
const lisbon = document.querySelector('.lisbon');
const sintra = document.querySelector('.sintra');
const lagos = document.querySelector('.lagos');
const sagres = document.querySelector('.sagres');
const cityPorto = document.querySelector('.cityPorto');
const cityCoimbra = document.querySelector('.cityCoimbra');
const cityNazare = document.querySelector('.cityNazare');
const cityLisbon = document.querySelector('.cityLisbon');
const citySintra = document.querySelector('.citySintra');
const cityLagos = document.querySelector('.cityLagos');

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
 const starteffect = (triger, target, effectin, effectout, timeOut) => {
    let animationCount = 0;
    parallax.addEventListener('scroll', function(){
        
        if (isElementInViewport(triger) === false) {
            console.log(isElementInViewport(triger))
            
            if(effectin===0){animationCount = 1;}else{
                target.classList.remove(effectout);
                setTimeout(function(){
                target.classList.add(effectin);
            }, timeOut);
                setTimeout(function(){ animationCount = 1; }, 10);}

           
        } else {
            if(animationCount === 1) {
                target.classList.remove(effectin);
                setTimeout(function(){
                target.classList.add(effectout);
            }, timeOut);
    
            } else if (animationCount === 0) {
            } else {}
    
        }

    });
 } 

starteffect(trg1, deep,'bcgBig', 'bcgSmall', 0);
starteffect(titleP, plane, 'planeIn', 0, 0 )
starteffect(titleP, cityPorto, 'infoShow', 0, 2000 )
starteffect(trg4, track, 0,'truckGo', 0 )
starteffect(trg4, coimbra, 0,'show', 2500 )
starteffect(trg4, cityCoimbra, 0,'infoShowLeft', 3100 )
starteffect(trg5, track, 0,'truckGo2', 0 )
starteffect(trg5, nazare, 0,'show', 1700 )
starteffect(trg5, cityNazare, 0,'infoShow', 2200 )
starteffect(trg6, track, 0,'truckGo3', 0 )
starteffect(trg6, lisbon, 0,'show', 1700 )
starteffect(trg6, cityLisbon, 0,'infoShow', 2200 )
starteffect(trg6, sintra, 0,'show', 2300 )
starteffect(trg6, citySintra, 0,'infoShowLeft', 2700 )
starteffect(trg7, track, 0,'truckGo4', 0 )
starteffect(trg7, lagos, 0,'show', 2300 )
starteffect(trg7, cityLagos, 0,'infoShow', 2800 )
starteffect(trg7, sagres, 0,'show', 3000 )
