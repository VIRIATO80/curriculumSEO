
//Controlamos que sea un IE11 para cambiar alguna funcionalidad que no funciona al contraer las capas de experiencia
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;


//Contenedor de paneles flexible para la sección de Experiencia Profesional
var panels = document.querySelectorAll('.panel');



//Hace toggleOpen sobre el estilo .open para intercambiar el foco entre paneles 
function toggleOpen() {
    if(this.classList.contains('open')){
        this.classList.remove('open');
        if(isIE11) {
            this.getElementsByTagName('p')[0].classList.add('fechaExperiencia');
            this.getElementsByTagName('p')[2].classList.add('empresa');
            this.getElementsByTagName('p')[3].classList.add('descripcionPuesto');
        }
        return;
    }

    Array.prototype.forEach.call (panels, function (panel) {
        panel.classList.remove('open');
        if(isIE11) {
            panel.getElementsByTagName('p')[0].classList.add('fechaExperiencia');
            panel.getElementsByTagName('p')[2].classList.add('empresa');
            panel.getElementsByTagName('p')[3].classList.add('descripcionPuesto');
        }
    });
    if(isIE11) {
        this.getElementsByTagName('p')[0].classList.remove('fechaExperiencia');
        this.getElementsByTagName('p')[2].classList.remove('empresa');
        this.getElementsByTagName('p')[3].classList.remove('descripcionPuesto');
    }
    this.classList.toggle('open');

}


function toggleActive(e) {
    if (e.propertyName.indexOf('flex') >= 0) {
        this.classList.toggle('open-active');
    }
}

//Añadimos dos eventos Javascript sobre cada uno de los paneles. Uno para el click y otro para el final de la transición
//Se tiene que hacer así para que el forEach funcione en Explorer y Edge

Array.prototype.forEach.call (panels, function (panel) {

    panel.addEventListener('click', toggleOpen); 
    panel.addEventListener('transitionend', toggleActive);
});
