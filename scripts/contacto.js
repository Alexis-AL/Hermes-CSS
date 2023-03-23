(function(){
  var scrAlert = document.getElementById("modAlerta"),
  btnAlert = document.getElementById("alertClose"),
  btnModal = document.getElementById("btnModal");

  btnModal.addEventListener("click",mostrar);
  btnAlert.addEventListener("click",ocultar);

  function mostrar(){
    scrAlert.classList.remove("oculto");
}
function ocultar(){
  scrAlert.setAttribute("class", "alert oculto");
}

    window.addEventListener('scroll', function()  {
        let element = document.getElementById('subirparaarriba');
        let screenSize = window.innerHeight;
        
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.remove('visible');
           
          } else {
            element.classList.add('visible');
           
          }
      });


$("#subirparaarriba").on("click",function(){

    $("body, html").animate({
        scrollTop: 0
      }, 500);

});



   






})();