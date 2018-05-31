var canvas = document.getElementById("main");
var context = canvas.getContext("2d");

function draw(){
    
    canvas.width = 800;
    canvas.height = 600;
    context.beginPath();
    context.moveTo(205, 400);
    context.lineTo(700, 400);
    context.lineTo(700, 500);
    context.lineTo(205, 500);
    context.lineTo(205, 400);
    context.lineWidth= 2;
    context.strokeStyle='black';
    context.stroke();
    
    var img= new Image();
    img.src = "./avatar.png"
    img.onload = function() {
        context.drawImage(img, 99, 331, 105, 170);
    }


    context.font = "30px serif";



    
    
    
    
    
}

function clearText(){
    context.clearRect(210,405,490,90);
}

var count = 0;

function drawText(){
    clearText();
    var text = ["天黑了","有点无聊", "该做什么呢"]
    if(text[count]){
        for(var s=0; s< text[count].length ; s++){
            let c = count;
            let index = s
            setTimeout(function(){
                
                console.log(text[c][index])
                context.fillText(text[c][index],225 + index * 30,440);
            },300 * index)
           
        }

        count = count + 1
    }else{
        count = 0;
    }

}

draw();


canvas.onclick = drawText;