//------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('scroll', function() {
  const content = document.querySelector('.content');
  const scrollPosition = window.scrollY;

  // Calculate the Y translation (fixed)
  const translateY = 0; // Keep vertical position fixed
  
  // Calculate the X translation based on scroll position (move left as you scroll down)
  const translateX = scrollPosition * 0.3; // Adjust the multiplier for desired movement

  // Update the CSS variables for the ::before pseudo-element
  content.style.setProperty('--bg-translate-x', `${translateX}px`);
  content.style.setProperty('--bg-translate-y', `${translateY}px`); // This remains 0
});

//------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('scroll', function() {
const content2 = document.querySelector('.content2');
const scrollPosition2 = window.scrollY;
const threshold = 320; // Define the threshold scroll position

let shiftAmount2;

// Check for different media queries and apply respective class
if (window.matchMedia('(max-width: 550px)').matches) {
  content2.classList.add('small-screen');
  shiftAmount2 = (scrollPosition2 > threshold ? scrollPosition2 - threshold : 0) * 0.36; // Different multiplier for small screens
} 

else if (window.matchMedia('(min-width: 549px) and (max-width: 738px)').matches) {
  content2.classList.add('medium-screen');
  shiftAmount2 = (scrollPosition2 > threshold ? scrollPosition2 - threshold : 0) * 0.22; // Different multiplier for medium screens
}

else if (window.matchMedia('(min-width: 1200px)').matches) {
  content2.classList.add('large-screen');
  shiftAmount2 = (scrollPosition2 > threshold ? scrollPosition2 - threshold : 0) * 0.35; // Default multiplier for large screens
}

// Update background position to move the image upward
content2.style.backgroundPosition = `center ${shiftAmount2}px`;
});

//------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// window.addEventListener('scroll', function() {
// var cola = document.querySelector('.cola'); 
// var scing = window.scrollY;

// cola.style.transform = 'translateX(' + (-scing / 2)*3 + 'px) translateY(' + (scing) + 'px)';

// });

window.addEventListener('scroll', function() {
    var cola = document.querySelector('.cola'); 
    var scing = window.scrollY;
    
    // Calculate the new opacity based on scroll position
    var opacityValue = 1 - (scing / (window.innerHeight / 1.5)); 
    // Ensure the opacity stays within bounds (0 to 1)
    opacityValue = Math.max(0, Math.min(1, opacityValue));
    
    // Apply the fade effect based on the scroll position
    cola.style.opacity = opacityValue;
});



//------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>> button speed 

window.addEventListener('scroll', function() {
    var my = document.querySelector('.myy'); 
    var scin = window.scrollY;

    let reg = 80;
    
    if(scin <= reg ){
        my.style.transform = 'translateX(' + (scin / 2)*8+ 'px) translateY(' + (scin) + 'px)';
    }
    
    
    });

//------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('scroll', function() {
var title = document.querySelector('.titleee');
var scpo = window.scrollY;

let fis = 150; 
let fin = 200;   

let fos = 600;
let foe = 650;  

if (scpo < fis) {

title.style.opacity = 0;
} 
else if (scpo >= fis && scpo <= fin) {

let opacity = (scpo - fis) / (fin - fis);
title.style.opacity = opacity;
}
else if (scpo > fin && scpo < fos) {

title.style.opacity = 1;
}
else if (scpo >= fos && scpo <= foe) {

let opacity = 1 - (scpo - fos) / (foe - fos);
title.style.opacity = opacity;
}
else {

title.style.opacity = 0;
}
});

//------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('scroll', function() {
var title = document.querySelector('.description');
var scpo = window.scrollY;

let fis = 200; 
let fin = 250;   

let fos = 650;
let foe = 700;  

if (scpo < fis) {

title.style.opacity = 0;
} 
else if (scpo >= fis && scpo <= fin) {

let opacity = (scpo - fis) / (fin - fis);
title.style.opacity = opacity;
}
else if (scpo > fin && scpo < fos) {

title.style.opacity = 1;
}
else if (scpo >= fos && scpo <= foe) {

let opacity = 1 - (scpo - fos) / (foe - fos);
title.style.opacity = opacity;
}
else {

title.style.opacity = 0;
}
});

//------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


window.addEventListener('scroll', function() {
  var lbird = document.querySelector('.lbirds'); 
  var scin = window.scrollY;

  const screenHeight = window.innerHeight;
  const th = screenHeight * 1.7; 
  
  if (scin >= th) {
      
      lbird.style.transform = 'translateX(' + (-(scin - th) * 0.5) + 'px)';
  } 
  else {
      
      lbird.style.transform = 'translateX(0) translateY(0)';
  }
});


//------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


window.addEventListener('scroll', function() {
  var frm = document.querySelector('.form'); 
  var scin = window.scrollY;

  const screenHeight = window.innerHeight;
  const th = screenHeight * 1.7; 
  
  if (scin >= th) {
      
      frm.style.transform = 'translateX(' + ((scin - th) * 0.5) + 'px)';
  } 
  else {
      
      frm.style.transform = 'translateX(0) translateY(0)';
  }
});

//------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('scroll', function() {
  var bx = document.querySelector('.slishow'); 
  var s = window.scrollY;

  // Move only on the X-axis based on scroll, keep Y fixed
  bx.style.transform = 'translateX(' + (-s / 4) + 'px) translateY(0)'; // Ensure Y stays fixed
});

  //------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  window.addEventListener('scroll', function() {
    var s1 = document.querySelector('.s4'); 
    var sci = window.scrollY;

    const screenHeight = window.innerHeight;
    const th = screenHeight * 0.53; 

    // Initial position to move it out of view
    let initialPosition = -100; // in vw
    let finalPosition = 0; // Final position when back in view

    // Calculate position based on scroll
    if (sci < th) {
        // If not scrolled past the threshold, keep it out of view
        s1.style.transform = `translateX(${initialPosition}vw)`;
    }
    else {
        // When scrolled past the threshold, calculate new position
        let translateX = initialPosition + (sci - th) * 0.4; // Move it back based on scroll speed

        // Clamp the value to not exceed finalPosition
        translateX = Math.min(translateX, finalPosition); 

        s1.style.transform = `translateX(${translateX}vw)`;
    }
});




window.addEventListener('scroll', function() {
  var s1 = document.querySelector('.s3'); 
  var sci = window.scrollY;

  const screenHeight = window.innerHeight;
  const th = screenHeight * 0.65; 

  // Initial position to move it out of view
  let initialPosition = -100; // in vw
  let finalPosition = 0; // Final position when back in view

  // Calculate position based on scroll
  if (sci < th) {
      // If not scrolled past the threshold, keep it out of view
      s1.style.transform = `translateX(${initialPosition}vw)`;
  }
  else {
      // When scrolled past the threshold, calculate new position
      let translateX = initialPosition + (sci - th) * 0.3; // Move it back based on scroll speed

      // Clamp the value to not exceed finalPosition
      translateX = Math.min(translateX, finalPosition); 

      s1.style.transform = `translateX(${translateX}vw)`;
  }
});




window.addEventListener('scroll', function() {
  var s1 = document.querySelector('.s2'); 
  var sci = window.scrollY;

  const screenHeight = window.innerHeight;
  const th = screenHeight * 0.77; 

  // Initial position to move it out of view
  let initialPosition = -100; // in vw
  let finalPosition = 0; // Final position when back in view

  // Calculate position based on scroll
  if (sci < th) {
      // If not scrolled past the threshold, keep it out of view
      s1.style.transform = `translateX(${initialPosition}vw)`;
  }
  else {
      // When scrolled past the threshold, calculate new position
      let translateX = initialPosition + (sci - th) * 0.3; // Move it back based on scroll speed

      // Clamp the value to not exceed finalPosition
      translateX = Math.min(translateX, finalPosition); 

      s1.style.transform = `translateX(${translateX}vw)`;
  }
});




  window.addEventListener('scroll', function() {
    var s1 = document.querySelector('.s1'); 
    var sci = window.scrollY;

    const screenHeight = window.innerHeight;
    const th = screenHeight * 0.90; 

    // Initial position to move it out of view
    let initialPosition = -100; // in vw
    let finalPosition = 0; // Final position when back in view

    // Calculate position based on scroll
    if (sci < th) {
        // If not scrolled past the threshold, keep it out of view
        s1.style.transform = `translateX(${initialPosition}vw)`;
    }
    else {
        // When scrolled past the threshold, calculate new position
        let translateX = initialPosition + (sci - th) * 0.35; // Move it back based on scroll speed

        // Clamp the value to not exceed finalPosition
        translateX = Math.min(translateX, finalPosition); 

        s1.style.transform = `translateX(${translateX}vw)`;
    }
});

//------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('scroll', function() {
  var s1 = document.querySelector('.titleee'); 
  var sci = window.scrollY;

  const screenHeight = window.innerHeight;

  const expstart = screenHeight * 0.23; 
  let expend = screenHeight * 0.60;

  let deexpstart = screenHeight * 0.60;
  let deexpend = screenHeight * 1.1;

  let initialPosition = 3; 
  let finpos = 5;

  if (sci < expstart) {
      s1.style.fontSize = `${initialPosition}vw`;
  }

  else if (sci >= expstart && sci <= expend)
  {
      let newFont = initialPosition + (sci - expstart) * 0.009;

      newFont = Math.min(newFont, finpos);
      s1.style.fontSize = `${newFont}vw`;
  }

  else if
  (sci >= deexpstart && sci <= deexpend) {
      let newFont = finpos - (sci - deexpstart) * 0.005;

      newFont = Math.max(newFont, initialPosition);
      s1.style.fontSize = `${newFont}vw`;
  }
});


//------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const profileP1 = document.querySelector('.p1');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 4.4;
    const closePositionEnd = viewportHeight * 5.0;
    const stayPositionEnd = viewportHeight * 5.0; 
    const apartPositionStart = viewportHeight * 5.6; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -15 + (15 * progress);
        profileP1.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP1.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = 0 - (15 * progress); // Move out to the left
    //     profileP1.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP1.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});





const profileP5 = document.querySelector('.p5');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 5.0;
    const closePositionEnd = viewportHeight * 5.6;
    const stayPositionEnd = viewportHeight * 5.6; 
    const apartPositionStart = viewportHeight * 6.2; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -15 + (15 * progress);
        profileP5.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP5.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = 0 - (15 * progress); // Move out to the left
    //     profileP5.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP5.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});




const profileP9 = document.querySelector('.p9');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 5.6;
    const closePositionEnd = viewportHeight * 6.2;
    const stayPositionEnd = viewportHeight * 6.2; 
    const apartPositionStart = viewportHeight * 6.8; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -15 + (15 * progress);
        profileP9.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP9.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = 0 - (15 * progress); // Move out to the left
    //     profileP9.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP9.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});




const profileP13 = document.querySelector('.p13');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 6.2;
    const closePositionEnd = viewportHeight * 6.8;
    const stayPositionEnd = viewportHeight * 6.8; 
    const apartPositionStart = viewportHeight * 7.4; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -15 + (15 * progress);
        profileP13.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP13.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = 0 - (15 * progress); // Move out to the left
    //     profileP13.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP13.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});


//------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const profileP2 = document.querySelector('.p2');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 4.4;
    const closePositionEnd = viewportHeight * 5.0;
    const stayPositionEnd = viewportHeight * 5.0; 
    const apartPositionStart = viewportHeight * 6; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = (-15 + (15 * progress))/2;
        profileP2.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP2.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = (0 - (15 * progress))/2; // Move out to the left
    //     profileP2.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP2.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});


const profileP6 = document.querySelector('.p6');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 5.0;
    const closePositionEnd = viewportHeight * 5.6;
    const stayPositionEnd = viewportHeight * 5.6; 
    const apartPositionStart = viewportHeight * 6.2; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = (-15 + (15 * progress))/2;
        profileP6.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP6.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = (0 - (15 * progress))/2; // Move out to the left
    //     profileP6.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP6.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});


const profileP10 = document.querySelector('.p10');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 5.6;
    const closePositionEnd = viewportHeight * 6.2;
    const stayPositionEnd = viewportHeight * 6.2; 
    const apartPositionStart = viewportHeight * 6.8; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = (-15 + (15 * progress))/2;
        profileP10.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP10.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = (0 - (15 * progress))/2; // Move out to the left
    //     profileP10.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP10.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});




const profileP14 = document.querySelector('.p14');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 6.2;
    const closePositionEnd = viewportHeight * 6.8;
    const stayPositionEnd = viewportHeight * 6.8; 
    const apartPositionStart = viewportHeight * 7.4; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = (-15 + (15 * progress))/2;
        profileP14.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP14.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = (0 - (15 * progress))/2; // Move out to the left
    //     profileP14.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP14.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});



const profileP3 = document.querySelector('.p3');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 4.4;
    const closePositionEnd = viewportHeight * 5.0;
    const stayPositionEnd = viewportHeight * 5.0; 
    const apartPositionStart = viewportHeight * 6; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -((-15 + (15 * progress))/2);
        profileP3.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP3.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = -((0 - (15 * progress))/2); // Move out to the left
    //     profileP3.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP3.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});


const profileP7 = document.querySelector('.p7');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 5.0;
    const closePositionEnd = viewportHeight * 5.6;
    const stayPositionEnd = viewportHeight * 5.6; 
    const apartPositionStart = viewportHeight * 6.2; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -((-15 + (15 * progress))/2);
        profileP7.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP7.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX =-((0 - (15 * progress))/2); // Move out to the left
    //     profileP7.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP7.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});



const profileP11 = document.querySelector('.p11');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 5.6;
    const closePositionEnd = viewportHeight * 6.2;
    const stayPositionEnd = viewportHeight * 6.2; 
    const apartPositionStart = viewportHeight * 6.8; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -((-15 + (15 * progress))/2);
        profileP11.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP11.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = -((0 - (15 * progress))/2); // Move out to the left
    //     profileP11.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP11.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});


const profileP15 = document.querySelector('.p15');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 6.2;
    const closePositionEnd = viewportHeight * 6.8;
    const stayPositionEnd = viewportHeight * 6.8; 
    const apartPositionStart = viewportHeight * 7.4; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -((-15 + (15 * progress))/2);
        profileP15.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP15.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = -((0 - (15 * progress))/2); // Move out to the left
    //     profileP15.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP15.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});




const profileP4 = document.querySelector('.p4');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 4.4;
    const closePositionEnd = viewportHeight * 5.0;
    const stayPositionEnd = viewportHeight * 5.0; 
    const apartPositionStart = viewportHeight * 6; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -(-15 + (15 * progress));
        profileP4.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP4.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = -(0 - (15 * progress)); // Move out to the left
    //     profileP4.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP4.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});





const profileP8 = document.querySelector('.p8');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 5.0;
    const closePositionEnd = viewportHeight * 5.6;
    const stayPositionEnd = viewportHeight * 5.6; 
    const apartPositionStart = viewportHeight * 6.2; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -((-15 + (15 * progress)));
        profileP8.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP8.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX =-((0 - (15 * progress))); // Move out to the left
    //     profileP8.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP8.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});





const profileP12 = document.querySelector('.p12');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 5.6;
    const closePositionEnd = viewportHeight * 6.2;
    const stayPositionEnd = viewportHeight * 6.2; 
    const apartPositionStart = viewportHeight * 6.8; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -((-15 + (15 * progress)));
        profileP12.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP12.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = -((0 - (15 * progress))); // Move out to the left
    //     profileP12.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP12.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});





const profileP16 = document.querySelector('.p16');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const closePositionStart = viewportHeight * 6.2;
    const closePositionEnd = viewportHeight * 6.8;
    const stayPositionEnd = viewportHeight * 6.8; 
    const apartPositionStart = viewportHeight * 7.4; 

    if (scrollTop < closePositionStart) {
        return;
    }

    if (scrollTop >= closePositionStart && scrollTop <= closePositionEnd) {
        const progress = (scrollTop - closePositionStart) / (closePositionEnd - closePositionStart);
        const translateX = -((-15 + (15 * progress)));
        profileP16.style.transform = `translateX(${translateX}vw)`;
    } 
    
    // else if (scrollTop > closePositionEnd && scrollTop <= stayPositionEnd) {
    //     profileP16.style.transform = 'translateX(0vw)'; 
    // } 
    
    // else if (scrollTop > stayPositionEnd && scrollTop <= apartPositionStart) {
    //     const progress = (scrollTop - stayPositionEnd) / (apartPositionStart - stayPositionEnd);
    //     const translateX = -((0 - (15 * progress))); // Move out to the left
    //     profileP16.style.transform = `translateX(${translateX}vw)`;
    // } 
    
    else {
        profileP16.style.transform = 'translateX(0vw)'; // Reset to original position on further scroll
    }
});

//------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// this is scrolling debugger 

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;

  const scrolledHeightInScreens = scrollTop / viewportHeight;
  
  console.log(`Scrolled Height: ${scrolledHeightInScreens} screen heights`);
});

