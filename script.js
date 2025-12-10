// Obtener el modal
var modal = document.getElementById("imageModal");

// Obtener la imagen dentro del modal
var modalImg = document.getElementById("imgExpanded");

// Obtener todas las imágenes de la galería
var images = document.querySelectorAll('.gallery-img');

// Añadir el evento click a cada imagen
images.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "flex";
        modalImg.src = this.src; // Pone la misma imagen en el modal
    }
});

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando se hace click en <span> (x), cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}

// También cerrar si se hace click fuera de la imagen (en el fondo negro)
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}