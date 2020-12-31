document.getElementById('smallBlock');

function upDate(previewPic){
document.getElementById('smallBlock').style.background="url(' "+previewPic.src+" ')";
document.getElementById('smallBlock').style.transition = "all 1.6s";
}

function unDo(){
   document.getElementById('smallBlock').style.background="url(' "+previewPic.src+" ')";
   document.getElementById('smallBlock').style.transition = "all 2.3s";
   //do nothing
}
