var myPix = ["img/Pretty Perfect Her Pink.webp", "img/Pinky winona.webp", "img/Princess Pink.webp", "img/Violet Violence.webp", "img/pinky promised to keep it platonic.webp", "img/cool fruit juice.webp", "img/Indienne Blue.webp", "img/nice orange yellow.webp", "img/Pretty Perfect Her Pink.webp", "img/Pinky winona.webp", "img/Princess Pink.webp", "img/Violet Violence.webp"];
setInterval(function walkPix() {
   const d = myPix.length;
   const c = Math.floor(Math.random() * d - 0);
   document.getElementById("smallBlock").src = myPix[c]
}, 5000);

function myMobile() {
   href = "tel:+526462408973";
};
