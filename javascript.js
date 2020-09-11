var a = "abcdefghijklmnopqrstuvwxyz";
var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var c ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ;
var d = "1234567890";
var lwrcase = a.split("");
var uprcase = b.split("");
var nmbs = d.split("");
var spec = c.split("");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(lwrcase);
console.log(uprcase);
console.log(nmbs);


// function passgen(event){
//     if (event.target.matches("button")){
//         event.preventDefault();

//     }
// }

// generate.addEventListener("click", passgen)