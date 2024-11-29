/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
*_*_*_*_*_*_*_*_*_*_*_*_INICIO PRESUPUESTO_*_*_*_*_*_*_*_*_*_*_*_*_*_*
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/

const form = document.getElementById("presupuestoForm");

const nombre = document.getElementById("fname");
const surname = document.getElementById("fsurname");
const phone = document.getElementById("fphone");
const email = document.getElementById("femail");
const btn = document.getElementById("enviar");


let valida ={
    nombre: false,
    surname: false,
    phone: false,
    email: false,
    myTerms: false
}

// Mensaje de error
function setErrorFor(input, message) {
    // recibe como parametro input y mensaje
    const formControl = input.parentElement;
    const atributo = document.createAttribute("class");
    atributo.value = "form-Section error";
    formControl.setAttributeNode(atributo);
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// si todo esta correcto
function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-Section success";
}
// validar nombre
nombre.addEventListener("blur",()=>{
    let name_re = /^[a-zA-Z ]{2,20}$/;

    if(nombre.value == ""|| nombre.value == null){
        valida.nombre = false;
        setErrorFor(nombre,"No se puede dejar el nombre vacio");
    }else{
        if(!name_re.exec(nombre.value)){
            valida.nombre = false;
            setErrorFor(nombre, "El nombre tiene que tener 2 y 20 caracteres");
        }else{
            valida.nombre = true;
            setSuccesFor(nombre);
        }
    }
});

// validar apellidos
surname.addEventListener("blur",()=>{
    let surname_re = /^[a-zA-Z ]{2,40}$/;

    if(surname.value == ""|| surname.value == null){
        valida.surname = false;
        setErrorFor(surname,"No se pueden dejar los apellidos vacios");
    }else{
        if(!surname_re.exec(surname.value)){
            valida.surname = false;
            setErrorFor(surname, "El nombre tiene que tener 2 y 40 caracteres");
        }else{
            valida.surname = true;
            setSuccesFor(surname);
        }
    }
});

// validar telefono
phone.addEventListener("blur",()=>{
    let phone_re = /^(0|6|7|8|9)[0-9]{9,10}$/;

    if(phone.value == ""|| phone.value == null){
        valida.phone = false;
        setErrorFor(phone,"No se puede dejar el teléfono vacio");
    }else{
        if(!phone_re.exec(phone.value)){
            valida.phone = false;
            setErrorFor(phone, "El telefono tiene que tener 9 digitos");
        }else{
            valida.phone = true;
            setSuccesFor(phone);
        }
    }
});

// validar email
email.addEventListener("blur",()=>{
    let email_re = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,4})+$/;

    if(email.value == ""|| email.value == null){
        valida.email = false;
        setErrorFor(email,"No se puede dejar el correo vacio");
    }else{
        if(!email_re.exec(email.value)){
            valida.email = false;
            setErrorFor(email, "El correo tiene que tener formato correcto");
        }else{
            valida.email = true;
            setSuccesFor(email);
        }
    }
});
btn.addEventListener("click", ()=>{
    const myTerms = document.getElementById("fterms");
     if(!myTerms.checked){
            valida.myTerms = false;
            setErrorFor(myTerms, "Tiene que aceptar las condiciones de privaciadad.");
            }else{
                valida.myTerms = true;
                setSuccesFor(myTerms);
        }
});

form.addEventListener("submit",(data)=>{
    data.preventDefault();

    let errorV = false;

    for(const property in valida){
        if(valida[property] == false){
            errorV = true;
        }
    }
   if(!errorV){
    form.submit();
   }

    
});


/**********CALCULAR PRESUPUESTO***********/

const valorSelect1 = document.getElementById("fproject");
const valorSelect2 = document.getElementById("fappointment");
const resultado = document.getElementById("calculate");

function calcularPresupuesto(e) {
const valorSelect3 = document.querySelector('input[name="fextras"]:checked');

if(valorSelect1.value == "-" || valorSelect2.value == "-") {
        resultado.innerHTML = 'Debes seleccionar un valor en ambos select.';

}else if(valorSelect1.value == "otros"){
            MostrarTextarea();
            resultado.innerHTML = "Escribe el tipo de servicio que deseas";

}else if(valorSelect3.value == "infantil" && (valorSelect1.value)){
        resultado.innerHTML = "Este servicio es gratuito";

}else{
        let valor1 = parseFloat(valorSelect1.value);
        let valor2 = parseFloat(valorSelect2.value);
        
            resultado.innerHTML = `${valor1 + valor2}€`;
}

}              
valorSelect1.addEventListener("change", ()=>{
    calcularPresupuesto();
    MostrarCalculo();
   
    
}); 
valorSelect2.addEventListener("change", ()=>{
    calcularPresupuesto();
    MostrarCalculo();
    
}); 
document.querySelector('input[name="fextras"]:checked').addEventListener("click", ()=>{
    console.trace(document.querySelector('input[name="fextras"]:checked'));
    calcularPresupuesto();
    setRadio('fextras', 'adulto');
}); 
document.querySelector('input[name="fextras"]').addEventListener("click", ()=>{
    calcularPresupuesto();
    setRadio('fextras', 'infantil');
}); 

function setRadio(name, value) {
        document.querySelectorAll(`input[name="${name}"]`).forEach(element => {
            if(element.value === value) {
                element.checked = true;
            }
        });
}

function MostrarCalculo(){
const calcular = document.getElementById("calculate");
const atr = document.createAttribute("class");
atr.value = "mostrar";
calcular.setAttributeNode(atr);
}

function MostrarTextarea(){
    const visualizar = document.getElementById("text-area");
    const atr = document.createAttribute("class");
    atr.value = "mostrar-textarea";
    visualizar.setAttributeNode(atr);
}

/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
*_*_*_*_*_*_*_*_*_*_*_*_FIN PRESUPUESTO_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/
