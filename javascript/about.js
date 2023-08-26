

 
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
 
 
 
 