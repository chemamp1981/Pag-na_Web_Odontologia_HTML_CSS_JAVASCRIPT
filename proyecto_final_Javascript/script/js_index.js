
/************************************************
 ************INICIO DE CARGA DE JSON*************
 ************************************************/


let jsonUrl = new XMLHttpRequest();
let url = "./JSON/myNoticias.json";

jsonUrl.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
jsonUrl.open("GET", url, true);
jsonUrl.send();

function myFunction(arr) {
  let out = "";
  let i;
  for(i = 0; i < arr.length; i++) {
    out += '<a href="' + arr[i].url + '" target="_blank">' + 
    arr[i].display + '</a><br>';
  }
  const botton = document.getElementById("noticias");
  botton.innerHTML = out;
}

/************************************************
 ************FIN DE CARGA DE JSON****************
 ************************************************/
