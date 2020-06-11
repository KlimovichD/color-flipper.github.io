const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.querySelector('.btn');
let color = document.querySelector('.color');

btn.addEventListener('click', function() {
   let hexColor = "#";
   for(let i = 0; i < 6; i++){
      hexColor += hex[randomNumber()];
   }
   myColor = LightenDarkenColor(hexColor, -15)
   color.textContent = hexColor;
   document.body.style.backgroundColor = hexColor;
   btn.style.backgroundColor = myColor;
}) 


function randomNumber(){
   return Math.floor(Math.random() * hex.length);
}
function LightenDarkenColor(col,amt) {
   var usePound = false;
   if ( col[0] == "#" ) {
       col = col.slice(1);
       usePound = true;
   }

   var num = parseInt(col,16);

   var r = (num >> 16) + amt;

   if ( r > 255 ) r = 255;
   else if  (r < 0) r = 0;

   var b = ((num >> 8) & 0x00FF) + amt;

   if ( b > 255 ) b = 255;
   else if  (b < 0) b = 0;

   var g = (num & 0x0000FF) + amt;

   if ( g > 255 ) g = 255;
   else if  ( g < 0 ) g = 0;

   return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}