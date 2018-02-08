function addElement() {
    // crea un nuevo div
    // y añade contenido
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hola!¿Qué tal?");
    newDiv.appendChild(newContent); //añade texto al div creado.

    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }



    /*Método jquery para publicar comentarios uno encima de otro sin que desaparezcan */

    $('#post').click(subirImagen);

    function subirImagen() {
      var $load = $('#load')[0].files[0];
      console.log($load);1

      var read = new FileReader();

      read.onloadend = function (){
        $('.caption').attr('src', read.result);
      }

      if($load) {
        read.readAsDataURL($load);
      }else {
        $('.caption').attr('src', " ")
      }
    }



    //Función de colocar imagen
