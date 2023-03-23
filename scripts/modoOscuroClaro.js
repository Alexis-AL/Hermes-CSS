(function(){

$(document).ready(function(){

    $("#id-sun").click(function(){
        document.getElementById('Mockup').classList.remove('dark-mode')
        document.getElementById('id-moon').classList.remove('active')
       
        this.classList.add('active')
    });

    $("#id-moon").click(function(){
        document.getElementById('Mockup').classList.add('dark-mode')
        document.getElementById('id-sun').classList.remove('active')
        this.classList.add('active')


    });    
});


})();