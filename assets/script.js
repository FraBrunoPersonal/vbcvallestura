/*
  Stra val esturo Slideshow
*/

var images = [
 "image/g1.jpg",
 "image/g2.jpg",
 "image/g3.jpg",
 "image/g4.jpg",
 "image/g5.jpg",
 "image/g6.jpg",
 "image/g7.jpg",
 "image/g8.jpg",
 "image/g9.jpg",
 "image/g10.jpg",
 "image/g11.jpg",
 "image/g12.jpg",
 "image/g13.jpg",
 ];
 var num = 0;

function next() {
 var slider = document.getElementById("slider");
 num++;
 if(num >= images.length) {
   num = 0;
 }
 slider.src = images[num];
 }

function prev() {
 var slider = document.getElementById("slider");
 num--;
 if(num < 0) {
   num = images.length-1;
 }
 slider.src = images[num];
}
