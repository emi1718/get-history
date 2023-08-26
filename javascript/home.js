
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
      },
    });


///////////////////////////////////////////////////////////////////





let readmore3= document.getElementById("content-more-3");



document.getElementById("readmore3").addEventListener("click",()=>{




if(readmore3.style.display=="block"){

    readmore3.style.display="none";
    document.getElementById("readmore3").innerText="Read More"
}

else {

    readmore3.style.display="block";
    document.getElementById("readmore3").innerText="Read Less"
}





})



let readmore2= document.getElementById("content-more-2");



document.getElementById("readmore2").addEventListener("click",()=>{




if(readmore2.style.display=="block"){

    readmore2.style.display="none";
    document.getElementById("readmore2").innerText="Read More"
}

else {

    readmore2.style.display="block";
    document.getElementById("readmore2").innerText="Read Less"
}





})




let readmore= document.getElementById("content-more");



document.getElementById("readmore").addEventListener("click",()=>{




if(readmore.style.display=="block"){

    readmore.style.display="none";
    document.getElementById("readmore").innerText="Read More"
}

else {

    readmore.style.display="block";
    document.getElementById("readmore").innerText="Read Less"
}





})






