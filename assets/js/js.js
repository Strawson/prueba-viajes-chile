window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.navbar');
    if(window.pageYOffset>0){
      nav.classList.add("bg-black");
    }else{
      nav.classList.remove("bg-black");
    }
  });

  function toggleNav() {
    var element = document.getElementById("header");
    
    element.classList.toggle("bg-black");
  };