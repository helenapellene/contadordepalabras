function contarPalabras() {
    var texto = document.getElementById('texto').value; 
    //Obtiene el valor del elemento con el id "texto" del formulario. El método getElementById busca un elemento en el documento con el id especificado y devuelve 
    //una referencia a ese elemento. value obtiene el valor del elemento, en este caso, el contenido del campo de texto
    var palabras = texto.split(' ').filter(function(word) {
      return word.length > 0; // Filtrar palabras vacías
    });
    var numeroPalabras = palabras.length;
  
    document.getElementById('resultado').innerHTML = 'Número de palabras: ' + numeroPalabras;
  }
  