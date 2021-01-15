
var myPix = [
"img/cool fruit juice.webp",
"img/Indienne Blue.webp",
"img/nice orange yellow.webp",
"img/Ocean Pastels.webp",
"img/OrangesScale.webp",
"img/Princess Pink.webp",
"img/Yellow the green.webp",
"img/Violet Violence.webp"];
setInterval(function walkPix() {
   var size = myPix.length;
   var randomNum = Math.floor(Math.random() * size);
   document.getElementById("smallBlock").src = myPix[randomNum]
}, 5000);

function myEmail() {
   location.href = "mailto:info@weknowstudio.com"
}
