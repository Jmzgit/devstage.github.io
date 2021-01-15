var myPix = ["img/cool fruit juice.webp", "img/Indienne Blue.webp", "img/nice orange yellow.webp", "img/Ocean Pastels.webp", "img/OrangesScale.webp", "img/Princess Pink.webp", "img/Yellow the green.webp", "img/Violet Violence.webp"];
setInterval(function walkPix() {
   var a = myPix.length;
   var b = Math.floor(Math.random() * a - 0);
   document.getElementById("smallBlock").src = myPix[b]
}, 5000);

function myEmail() {
   location.href = "mailto:info@weknowstudio.com"
};
