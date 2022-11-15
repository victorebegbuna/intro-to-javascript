var slideIndex, slides,dots,captiontext;
function initGallery() {
    slideIndex=0;
    slides=document.getElementsByClassName("imageholder");
    slides[slideIndex].style.opacity=1;

    captiontext=document.querySelector(".captionholder .captiontext");
    captiontext.innerText=slides[slideIndex].querySelector(".captiontext").innerText;

    dots=[];
    var dotscontainer=document.getElementById("dotscontainer");

    for(var i=0;i<slides.length;i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dot.setAttribute("onclick", "moveSlide("+i+")");
        dotscontainer.append(dot);
        dots.push(dot);
    }

    dots[slideIndex].classList.add("active");
  
}
initGallery();
function plusSlides(n) {
    moveSlide(slideIndex+n);

}

function moveSlide(n) {
    var i,current,next;
    var moveSlideAnimClass={
        forCurrent:"",
        forNext:""
    }
    if(n>slideIndex) {
        if(n>=slides.length) {n=0}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
    }else if(n<slideIndex) {
        if(n<0) {n=slides.length-1}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightNextSlide";
    }
   
    if(n!=slideIndex) {
        next=slides[n];
        current=slides[slideIndex];
        for(i=0;i<slides.length;i++) {
            slides[i].className="imageholder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
            
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
    }

}