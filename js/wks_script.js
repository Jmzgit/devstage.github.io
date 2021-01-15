
var myPix = ["img/OrangesScale Color Palette - color-hex.com.webp", "img/Piggy greens Color Palette - color-hex.com.webp", "img/Ocean Pastels Color Palette - color-hex.com.webp", "img/Violet Violence Color Palette - color-hex.com.webp", "img/nice orange yellow mix Color Palette - color-hex.com.webp", "img/--cool fruit juice-- Color Palette - color-hex.com.webp", "img/OrangesScale Color Palette - color-hex.com.webp", "img/Princess Pink Color Palette - color-hex.com.webp", "img/S u n n y Color Palette - color-hex.com.webp", "img/Indienne Blues Color Palette - color-hex.com.webp"];
setInterval(function walkPix() {
   var size = myPix.length;
   var randomNum = Math.floor(Math.random() * size);
   document.getElementById("smallBlock").src = myPix[randomNum]
}, 5000);

function myEmail() {
   location.href = "mailto:mail@weknowstudio.com"
}
