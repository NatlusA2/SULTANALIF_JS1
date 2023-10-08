let sudahmakan = "sudah";

//if else
if (sudahmakan == "habis") {
  console.log("mending tidur");
} else {
  console.log("langsung makan")
}

//if
if (sudahmakan == "males") {
  console.log("buruan masak")
}

//if else nested
if(sudahmakan === "sudah"){
    console.log("kenyang");

} else if(sudahmakan === "kocak"){

  console.log("masih lapar");
}else{
console.log("okey")
}

//switch case 

let buah = prompt("masukan nama buah")

switch (buah){
    case "nanas":
alert("1000");
    break;
case "apel":
    alert("2000");
    break;
case "lengkeng":
    alert("3000");
    break;
 default:
 alert ('maaf menu tidak ada'); 
}  





/* perulangan for
for (let i = 0; i < 100; i++) {
  console.log("angka" + (i+1));
}
*/

let angka = 5
// dowhile
do {
  console.log(angka)
  angka ++
} while (angka < 5);


//while
// kalo while itu ga bakal jalan klo udh sesuai sama kondisi, kalo dowhile langsung run apapun kondisinya
while (angka < 5 ) {
  console.log(angka)
  angka ++
}

//function
let T = jlmhbuah(5, 3);

function jlmhbuah(a, b) {
  return a + b;
}



