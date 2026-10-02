document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
 if(menu)menu.addEventListener("click",()=>nav.classList.toggle("open"));
 const form=document.getElementById("contactForm");
 if(form)form.addEventListener("submit",e=>{
   e.preventDefault();
   const name=document.getElementById("name"),email=document.getElementById("email"),message=document.getElementById("message");
   const ne=document.getElementById("nameError"),ee=document.getElementById("emailError"),me=document.getElementById("messageError"),success=document.getElementById("success");
   ne.textContent=ee.textContent=me.textContent=success.textContent="";
   let ok=true;
   if(!name.value.trim()){ne.textContent="Please enter your name.";ok=false}
   if(!/^\S+@\S+\.\S+$/.test(email.value.trim())){ee.textContent="Please enter a valid email address.";ok=false}
   if(!message.value.trim()){me.textContent="Please enter a message.";ok=false}
   if(ok){success.textContent="Message validated successfully! Thank you for reaching out.";form.reset()}
 });
});