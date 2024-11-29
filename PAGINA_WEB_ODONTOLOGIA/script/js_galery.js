
/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
*_*_*_*_*_*_*_*_*_*_*_*_INICIO GALERY_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/

let completo = false;
completo = crear();

if(completo){
var galeryValue = 1;
showImg(galeryValue);

const izq = document.getElementById("left");
const der = document.getElementById("right");

izq.addEventListener("click",()=>{
    showImg(galeryValue += -1);
});

der.addEventListener("click",()=>{
    showImg(galeryValue += 1);
});

let array = document.querySelectorAll(".btn");

array.forEach((item, galery) =>{
    item.addEventListener("click",(data)=>{
          console.log(data.target.id.substr(4));
        showImg(galeryValue = data.target.id.substr(4));

    });
});

}
function showImg(foto){
    var i;
    const img = document.querySelectorAll(".img-galery");
    const slides = document.querySelectorAll(".btn");
    if(foto > img.length ){
        galeryValue = 1;
    }
    if(foto < 1){
        galeryValue = img.length;
       
    }

    for(i=0; i < img.length; i++){
        img[i].style.display = "none";
    }

    for(i=0; i < slides.length; i++){
        slides[i].style.background = "none";
    }


    img[galeryValue-1].style.display = "block";
    slides[galeryValue-1].style.background = "#701d97";
}

function crear(){
    const slider = document.querySelector('.galery-content');
    // FLECHA IZQUIERDA
    let div = document.createElement('div');
    div.className = "sliders left";
    div.id = "left";
    
    let span = document.createElement('span');
    span.className = "fa-solid fa-chevron-left";
    div.append(span);
    
    slider.append(div);

    // FLECHA DERECHA
    let div2 = document.createElement('div');
    div2.className = "sliders right";
    div2.id = "right";
    
    let span2 = document.createElement('span');
    span2.className = "fa-solid fa-chevron-right";
    div2.append(span2);
    
    slider.append(div2);

    // BOTONES

    let div3 = document.createElement('div');
    div3.className = "btm-slider";
    slider.append(div3);
    
    const imagenes = document.querySelectorAll(".img-galery");
    for(var i=1;i<= imagenes.length;i++){
        let span3 = document.createElement('span');
        span3.className = "btn";
        span3.id = "btn-" + i;
        div3.append(span3);
    }
    



    return true;
}

/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
*_*_*_*_*_*_*_*_*_*_*_*_FIN GALERY_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/
