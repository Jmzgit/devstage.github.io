var myPix = ["img/cool fruit juice.webp", "img/Indienne Blue.webp", "img/nice orange yellow.webp", "img/Ocean Pastels.webp", "img/OrangesScale.webp", "img/Princess Pink.webp", "img/Yellow the green.webp", "img/Violet Violence.webp"];
setInterval(function walkPix() {
   var d = myPix.length;
   var c = Math.floor(Math.random() * d - 0);
   document.getElementById("smallBlock").src = myPix[c];
   document.getElementById("MyAlt").innerHTML = (smallBlock.src + c)
}, 5000);

function myEmail() {
   location.href = "mailto:info@weknowstudio.com"
};
