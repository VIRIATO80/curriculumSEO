var navbarItems = document.getElementsByClassName('navbar-item');

for(var i = 0; i < navbarItems.length; i++){
    navbarItems[i].addEventListener('click', function(event){
        limpiarEstilosMenu();
        this.classList.add('active');
        var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
        if(sectionToGo.length == 2){
            event.preventDefault();
            var goTo = sectionToGo[1];
            getElementByIdAndScroll(goTo);
        }
    });
}

function limpiarEstilosMenu(){
    var listaItems = document.querySelectorAll('.navbar-item');

    //Se tiene que hacer así para que el forEach funcione en Explorer y Edge
    Array.prototype.forEach.call (listaItems, function (item) {
        item.classList.remove('active')    
    });

}


function getElementByIdAndScroll(id){
   
   var elem;
   if(id === ''){
        elem = document.getElementsByClassName('header')[0];
   }else{
        elem = document.getElementById(id);
   }
   scrollToElement(elem);    
}

function scrollToElement(element){
    var jump = (element.getBoundingClientRect().top - 70) * 0.2;

    document.documentElement.scrollTop += jump;

    document.body.scrollTop += jump;

    if(!element.lastJump || element.lastJump > Math.abs(jump)){
        element.lastJump = Math.abs(jump);        
        setTimeout(function(){
            scrollToElement(element);
        }, 20);
    }else{
       element.lastJump = null; 
    }
}

//Bloque para el scrollspy

var section = document.getElementsByTagName('section');
var sections = {};
var i = 0;

//Portada se considera como posición 0
sections['portada'] = 0;

//Se recolectan las posiciones de todas las secciones (más portada)y se guardan en una colección
Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop-90;
});

window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
        if (sections[i] <= scrollPosition) {
            limpiarEstilosMenu();
            document.getElementById(i+'-menu').classList.add('active');
        }
    }
};
