var blueonepos = 0;
$("#blueTokenTwo").click(function(){

let blueleft = [55,80,105,130,130,130,130,130,130,155,180,180,180,180,180,180,205,230,255,280,305,305,305,280,255,230,205,180,180,180,180,180,180,155,130,130,130,130,130,130,105,80,55,30,5,5,30,55,80,105,130];
let bluetop = [180,180,180,180,205,230,255,280,305,305,305,280,255,230,205,180,180,180,180,180,180,155,130,130,130,130,130,130,105,80,55,30,5,5,5,30,55,80,105,130,130,130,130,130,130,155,155,155,155,155,155];

var myVar = setInterval(myTimer, 500);

let i = 6 //Math.floor(Math.random() * 10+1);
let j = 0;
newpos = blueonepos+i;

function myTimer() {
    /*$("#blueTokenTwo").css("z-index","-1");*/
$("#blueTokenOne").css("z-index","1");
  $("#blueTokenOne").css({"margin-left": blueleft[newpos-i+j]+"px","position": "absolute"});
  $("#blueTokenOne").css({"margin-top": bluetop[newpos-i+j]+"px","position": "absolute"});
  $("#blueTokenOne").html(newpos);
  j++;
  if (j==i){
  var clear = clearInterval(myVar);
  blueonepos += j;
}
}
});
