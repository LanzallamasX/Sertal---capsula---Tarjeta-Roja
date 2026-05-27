
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array("images/arbitro.png");

function preloadImages(e) {
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}

function trackProgress() {
    loadedImages++;
    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}

function imagesLoaded() {
    
    document.getElementById('loader-container').style.display = 'none';
    document.getElementById('banner_content').style.display = 'block';
    

    initHandlers();
    initAnimations();

}

/* PARA DETECTAR SI ES IOs */
var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (is_Mac == true || iOS == true) {
     
}



/* PARA DETECTAR SI ES IE */
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > 0){

  alert("IE");
  
}


// VARIABLES GLOBALES
var r = 100;
var dur = 1;

var multitimeline = gsap.timeline({repeat: 1});
    multitimeline
    .add(fr1(), 0)

    ;

  //  multitimeline.play(18);

//gsap.set("#bgblue", {y: 259})

function fr1(){

var tl_textEnd = gsap.timeline({paused: true});
tl_textEnd.timeScale( 1 );  
tl_textEnd
.from("#txt-1-1-gradient path", 0.35, {scale: 0, transformOrigin: "50% 100%", stagger: 0.03, ease: "back.out(1.7)"}, "<")
.from("#txt-1-1-shadow path", 0.35, {scale: 0, transformOrigin: "50% 100%", stagger: 0.03, ease: "back.out(1.7)"}, "<")
.from("#txt-1-2-gradient path", 0.35, {scale: 0, transformOrigin: "100% 50%", stagger: 0.03, ease: "back.out(1.7)"}, "<+0.35")
.from("#txt-1-2-shadow path", 0.35, {scale: 0, transformOrigin: "50% 100%", stagger: 0.03, ease: "back.out(1.7)"}, "<")
.from("#txt-1-3-gradient path", 0.35, {scale: 0, transformOrigin: "100% 50%", stagger: 0.03, ease: "back.out(1.7)"}, "<+0.35")
.from("#txt-1-3-shadow path", 0.35, {scale: 0, transformOrigin: "50% 100%", stagger: 0.03, ease: "back.out(1.7)"}, "<")

var tl_ = gsap.timeline();
tl_.timeScale( 1 );  
tl_

.from("#tribuna", 6, {x: -100, repeat: -1, yoyo: true, ease: "power1.out"}, "<")
.from("#arbitro", 4, {y: 20, scale: 1.2, ease: "power3.out"}, "<")

.from("#txt-1-1", 0.65, {y: 20, autoAlpha: 0, ease: "power3.out"}, "<+0.25")
.from("#txt-1-2", 0.65, {y: 20, autoAlpha: 0, ease: "power3.out"}, "<+0.2")


.from("#wrapbg", 8, {scale: 2.2, transformOrigin: "75% 30%", ease: "power2.inOut"}, "<")
.from("#character-1", 8, {scale: 1.7, x: 100, transformOrigin: "30% 40%", ease: "power2.inOut"}, "<")

.to("#txt-1-1, #txt-1-2", 0.65, {y: 20, autoAlpha: 0, ease: "power3.out"}, "<+3")


.from("#txt-2-1", 0.65, {y: 20, autoAlpha: 0, ease: "power3.out"}, "<+0.25")
.from("#txt-2-2", 0.65, {y: 20, autoAlpha: 0, ease: "power3.out"}, "<+0.2")
.from("#txt-2-3", 0.65, {y: 20, autoAlpha: 0, ease: "power3.out"}, "<+0.2")

.from("#endFrame", 2, {scale: 1.3, transformOrigin: "50% 90%", ease: "power3.out"}, ">+3")
.from("#endFrame", 0.35, {autoAlpha: 0, ease: "power3.out"}, "<")

.add( function() {triggerConfetti();}, "<" )


.from("#txt-3-1", 0.65, { y: 20, autoAlpha: 0, ease: "power3.out"}, "<")
.to("#sertal", 0.65, { autoAlpha: 0, ease: "power3.out"}, "<")
.from("#roem", 0.65, { autoAlpha: 0, ease: "power3.out"}, "<+0.25")

.add( function() {tl_textEnd.play()}, "<+0.3" )




;



return tl_  

}

function triggerConfetti(){

  const wrap = document.querySelector("#confetti-wrap");

  const colors = [
    "#fff",
    "#118AB2",

  ];

  const shapes = ["square", "rect", "circle"];

  for(let i = 0; i < 150; i++){

    const el = document.createElement("div");

    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    el.className = `confetti ${shape}`;

    gsap.set(el,{
      backgroundColor:colors[Math.floor(Math.random() * colors.length)],
      left:gsap.utils.random(-20,1300),
      top:gsap.utils.random(-200,800),
      scale:gsap.utils.random(1,2.2),
      rotation:gsap.utils.random(-180,180),
      rotationX:gsap.utils.random(-360,360),
      rotationY:gsap.utils.random(-360,360),
      filter:`blur(${gsap.utils.random(0,1.5)}px)`
    });

    wrap.appendChild(el);

    const tl = gsap.timeline({
      onComplete:() => el.remove()
    });

    tl.to(el,{
      autoAlpha:1,
      duration:0.05
    });

    tl.to(el,{
      y:gsap.utils.random(260,400),
      x:`+=${gsap.utils.random(-120,120)}`,
      rotation:gsap.utils.random(-720,720),
      rotationX:`+=${gsap.utils.random(-720,720)}`,
      rotationY:`+=${gsap.utils.random(-1300,1300)}`,
      ease:"power1.out",
      duration:gsap.utils.random(1.8,3)
    },0);

    tl.to(el,{
      opacity:0,
      duration:0.4
    },"-=0.4");

  }
}






function initAnimations(){
    multitimeline.timeScale(1); 
}


//HANDLERS
function initHandlers() {

var clicktag = document.getElementById('clickTag');
    clicktag.addEventListener('mouseup', function(event) {
        
         
        window.open(window.clickTag,'_blank');
        
          
    })


setTimeout(function() {

  clicktag.addEventListener('mouseenter', function (e) {
      a.enter();
  });

  clicktag.addEventListener('mouseleave', function (e) {
      a.leave();
  });

}, 1000);






  var a = {
    enter: function () {
      console.log('enter');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta img", 0.3, {scale: 1, backgroundColor: "#A3082A", borderRadius: "30px", ease:Power2.easeOut}, 0)
    },
    leave: function () {
      console.log('leave');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta img", 0.3, {scale: 1, backgroundColor: "#EB0029", borderRadius: "30px", ease:Power2.easeOut}, 0)

    },
  };

}

