var opEstudiante = document.getElementById("opEstudiante");
var opTrainee = document.getElementById("opTrainee");
var opJunior = document.getElementById("opJunior");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var categoria = document.getElementById("categoria");
var precioFinal = document.getElementById("precioFinal");
var estudiante = document.getElementById("estudiante");
var trainee = document.getElementById("trainee");
var junior = document.getElementById("junior");
var precio = 200;
var precioVigente=200;
var cantidad = document.getElementById("cantidad");
var cantidadNum=0;


opEstudiante.addEventListener("click", function () {
    opEstudiante.classList.replace("caja", "cajaClicked");
    opTrainee.classList.replace("cajaClicked","caja");
    opJunior.classList.replace("cajaClicked","caja");
    categoria.value = "estudiante";
    precioFinal.value = "Total a pagar: $"
    if(cantidad.value){
        cantidadNum = parseInt(cantidad.value);
    }
    precioVigente=(precio - (0.8*precio))
    precioFinal.value = precioFinal.value +(precioVigente*cantidadNum);

})

opTrainee.addEventListener("click", function () {
    opEstudiante.classList.replace("cajaClicked","caja");
    opTrainee.classList.replace("caja", "cajaClicked");
    opJunior.classList.replace("cajaClicked","caja");
    categoria.value = "trainee";
    precioFinal.value = "Total a pagar: $"
    if(cantidad.value){
        cantidadNum = parseInt(cantidad.value);
    }
    precioVigente=(precio - (0.5*precio))
    precioFinal.value = precioFinal.value +(precioVigente*cantidadNum);
    
})

opJunior.addEventListener("click", function () {
    opEstudiante.classList.replace("cajaClicked","caja");
    opTrainee.classList.replace("cajaClicked","caja");
    opJunior.classList.replace("caja", "cajaClicked");
    categoria.value = "junior";
    precioFinal.value = "Total a pagar: $"
    if(cantidad.value){
        cantidadNum = parseInt(cantidad.value);
    }
    precioVigente=(precio - (0.15*precio))
    precioFinal.value = precioFinal.value +(precioVigente*cantidadNum);
    
})

categoria.addEventListener("change", function () {
    if(categoria.value=="estudiante"){
        opEstudiante.classList.replace("caja", "cajaClicked");
    opTrainee.classList.replace("cajaClicked","caja");
    opJunior.classList.replace("cajaClicked","caja");
    
    precioFinal.value = "Total a pagar: $"
    precioVigente=(precio - (0.8*precio))
    precioFinal.value = precioFinal.value +(precioVigente*cantidadNum);
    }
    else if(categoria.value== "trainee"){
        opEstudiante.classList.replace("cajaClicked","caja");
    opTrainee.classList.replace("caja", "cajaClicked");
    opJunior.classList.replace("cajaClicked","caja");
   
    precioFinal.value = "Total a pagar: $"
    precioVigente=(precio - (0.5*precio))
    precioFinal.value = precioFinal.value +(precioVigente*cantidadNum);
    }
    else if(categoria.value== "junior"){
        
     opEstudiante.classList.replace("cajaClicked","caja");
    opTrainee.classList.replace("cajaClicked","caja");
    opJunior.classList.replace("caja", "cajaClicked");
    
    precioFinal.value = "Total a pagar: $"
    precioVigente=(precio - (0.15*precio))
    
    precioFinal.value = precioFinal.value +(precioVigente*cantidadNum);
    }
    else{
        opEstudiante.classList.replace("cajaClicked","caja");
    opTrainee.classList.replace("cajaClicked","caja");
    opJunior.classList.replace("cajaClicked","caja");
    
    precioFinal.value = "Total a pagar: $"
    if(cantidad.value){
        cantidadNum = parseInt(cantidad.value);
    }
    precioVigente=precio 
    precioFinal.value = precioFinal.value +(precioVigente*cantidadNum);
    }
})

cantidad.addEventListener("input", function () {
    if(!cantidad.value){
        cantidad.value=0;
    }
    cantidadNum = parseInt(cantidad.value);
    precioFinal.value = "Total a pagar: $" + (precioVigente* cantidadNum);
    cantidad.value= parseInt(cantidad.value);
})

function borrar(event){
    event.preventDefault()
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    categoria.value = "";
    precioFinal.value = "Total a pagar: $";
    categoria.value = "ninguno";
    opTrainee.classList.replace("cajaClicked","caja");
    opJunior.classList.replace("cajaClicked","caja");
    opEstudiante.classList.replace("cajaClicked","caja");
    cantidad.value="";
    precioVigente=precio;
    cantidadNum=0;
}

function borrarOK(){
    
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    categoria.value = "";
    precioFinal.value = "Total a pagar: $";
    categoria.value = "ninguno";
    opTrainee.classList.replace("cajaClicked","caja");
    opJunior.classList.replace("cajaClicked","caja");
    opEstudiante.classList.replace("cajaClicked","caja");
    cantidad.value="";
    precioVigente=precio;
    cantidadNum=0;

}

function enviar(event){
    event.preventDefault()
    cantidad.classList.remove("bordeError");
    nombre.classList.remove("bordeError");
    apellido.classList.remove("bordeError");
    correo.classList.remove("bordeError");

    var todoOK=false
    if(cantidad.value!=null && cantidad.value>0 && nombre.value!="" && apellido.value!="" && correo.value!="" ){
        todoOK=true
    }
    if(todoOK){
    alert("Gracias por su compra");
    borrarOK();
    
    }
    else{
        if(cantidad.value==0 || cantidad.value==null){
            cantidad.classList.add("bordeError");
        }
        if(nombre.value==""){
            nombre.classList.add("bordeError");
        }
        if(apellido.value==""){
            apellido.classList.add("bordeError");
        }
        if(correo.value==""){
            correo.classList.add("bordeError");
        }
     
    }
}
