// Acceder a elementos y obtener clases del elemento
const element = document.getElementById('myElement');
console.log(element.className);

// Seleccionar elementos por clase
const elementsByClass = document.getElementsByClassName('miEjemplo');
console.log(elementsByClass);

// Seleccionar elementos por ID
const elementById = document.getElementById('Elemento');
console.log(elementById);

// Seleccionar elementos con querySelector
const elementByQuery = document.querySelector('.miEjemplo');
console.log(elementByQuery);

// Seleccionar elementos con querySelectorAll
const elementsByQueryAll = document.querySelectorAll('.miEjemplo');
console.log(elementsByQueryAll);
document.addEventListener('DOMContentLoaded', function() {
    // Tu código para acceder a los elementos aquí
  });
  const elementoID = document.getElementById('Elemento');
if (elementoID !== null) {
  console.log(elementoID.className);
} else {
  console.log('El elemento no existe en el DOM');
}