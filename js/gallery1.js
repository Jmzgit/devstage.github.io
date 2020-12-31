document.getElementById('smallBlock');

function upDate(previewPic){
document.getElementById('smallBlock').style.background="url(' "+previewPic.src+" ')";
document.getElementById('smallBlock').style.transition = "all 1.2s";
}

function unDo(){
   document.getElementById('smallBlock').style.background="url(' "+previewPic.src+" ')";
   document.getElementById('smallBlock').style.transition = "all 1.2s";
   //do nothing
}
