var myPix = ["img/Pretty Perfect Her Pink.webp", "img/Pinky winona.webp", "img/Princess Pink.webp", "img/Violet Violence.webp", "img/pinky promised to keep it platonic.webp", "img/cool fruit juice.webp", "img/Indienne Blue.webp", "img/nice orange yellow.webp", "img/Pretty Perfect Her Pink.webp", "img/Pinky winona.webp", "img/Princess Pink.webp", "img/Violet Violence.webp"];
setInterval(function walkPix() {
   const a = myPix.length;
   const b = Math.floor(Math.random() * a - 0);
   document.getElementById("smallBlock").src = myPix[b]
}, 5000);

function myMobile() {
   var digits = document.getElementById('myCell');
digits.href =  "tel:+526462408973";
};
