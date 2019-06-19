
   var colors=['rgb(255, 179, 153)', 'rgb(255, 51, 255)', 'rgb(255, 255, 153)', 'rgb(0, 179, 230)', 'rgb(230, 179, 51)','rgb(255, 102, 51)'];
   var count=0;
   var clickedColor;
   var pickedColor;
   var winner=false;
function spawnColors(){
    
    $(".square").each(function(){
        var index = $(".square").index(this);
        var i = (index + count) % colors.length;
        $(this).css("background-color",randomColor());
    })
    count++;


    var item = $(".square")[randomNumber(0,5)];
    pickedColor = $(item).css("background-color");
    var colorTitle= pickedColor.toUpperCase();
    $("#colorDisplay").text(colorTitle);
}
function CompareColors(){

    $(".square").click(function(){
        clickedColor = $(this).css("background-color");
        if(clickedColor === pickedColor){
           youWin();
        }else{
            $(this).animate({opacity:0},"slow");
            $("#message").text("try again!");
        }
        console.log($(this).css( "background-color" ));
    });
   
}
function youWin(){
    
    $(".square").css("background-color",pickedColor);
    $(".square").animate({opacity:1});
    $("#message").text("Correct!");
    $("h1").css("background-color",pickedColor);
    $("#reset").text("PLAY AGAIN");
}

function randomColor(){
        return ("rgb("+randomNumber(0,255)+", "+randomNumber(0,255)+", "+randomNumber(0,255)+")");
}
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


$("#reset").click(function(){
    $("#reset").text("NEW COLORS");
    $("h1").css("background-color", "lightcoral");
    $(".square").animate({opacity:1},"fast");
    $("#message").text(" ");
    spawnColors();
   
      
    
});
spawnColors();
CompareColors();


