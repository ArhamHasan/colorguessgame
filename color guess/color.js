

function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}
//-----------------------------------------------
function colorBlocks(color, blocks){
	for(var i=0; i<6; i++){
	blocks[i].style.backgroundColor = color;
}
}
//------------------------------------------------
var colors =["pink","blue","red","orange","yellow","purple","green",
              "brown","white","grey","navy","lime","maroon"];

shuffle(colors);              

var correctColor=colors[Math.floor(Math.random() * 6)]; 

var h2=document.querySelector("h2");
h2.innerHTML=correctColor;            

var blocks =document.querySelectorAll(".block");
var strip3 =document.querySelector(".strip3");
var strip2 =document.querySelector(".strip2");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");

for(var i=0; i<6; i++){
	blocks[i].style.backgroundColor = colors[i];
	blocks[i].addEventListener("click",function(){
		if(this.style.backgroundColor === correctColor){
			message.innerHTML="Good Job!";
			colorBlocks(correctColor, blocks);
			h1.style.backgroundColor=correctColor;
			strip2.style.backgroundColor=correctColor;
			strip3.style.backgroundColor=correctColor;
			resetB.style.backgroundColor=correctColor;
		}
		else{
			this.style.backgroundColor = "DarkSlateGrey";
			
			message.innerHTML="Try Again";
		}
	});

}

var resetB=document.querySelector("#reset");
resetB.addEventListener("click",function(){
	window.location.reload(false);
});


