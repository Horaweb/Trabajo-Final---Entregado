

$("#form").submit(guardarLocal)
 function guardarLocal(e){
   e.preventDefault()
   let usuariosStorage = JSON.parse(localStorage.getItem("Usuarios"))
   let nombre = $("#nombre")[0].value
   let apellido = $("#apellido")[0].value
   let direccion = $("#direccion")[0].value
   let email = $("#email")[0].value
   if(usuariosStorage){
     usuariosStorage.push({nombre: nombre, apellido: apellido, direccion: direccion, email: email})
     localStorage.setItem("Usuarios", JSON.stringify(usuariosStorage))
   } else {
     let arrayUsuarios = []
     arrayUsuarios.push({nombre: nombre, apellido: apellido, direccion: direccion, email: email})
     localStorage.setItem("Usuarios", JSON.stringify(arrayUsuarios))
   
    }

 
          $("#myModal").modal('show');
   
  
      $(".close").click(function () {
          $("#myModal").modal('hide');
      });

}

