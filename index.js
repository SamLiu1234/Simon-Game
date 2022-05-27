document.getElementById("red").addEventListener("click",pushbutton)
document.getElementById("yellow").addEventListener("click",pushbutton)
document.getElementById("blue").addEventListener("click",pushbutton)
document.getElementById("green").addEventListener("click",pushbutton)
function pushbutton(button,buttonsequence){
    if (buttonsequence==true){
        button.classList.add('pressed')
        setTimeout(function(){button.classList.remove("pressed")},100)
    }
    else{button.target.classList.add("pressed")
    setTimeout(function(){button.target.classList.remove("pressed")},100)
    userinput.push(button.target.id)
    compareinput()
    }
}
$(document).on("keydown",function(key){
    if(key.key==="A"||key.key==="a"&&startgame===false){
        addsequence()
        startgame=true
        }
        }
)
var colour=[]
function getrandomcolour(){
    var randomnumber=Math.floor(Math.random()*4)
    if (randomnumber==0){
    pushbutton(document.getElementById("red"),true)
        return "red"
    }
    else if(randomnumber==1){
    pushbutton(document.getElementById("yellow"),true)
        return "yellow"
}
    else if(randomnumber==2){
    pushbutton(document.getElementById("blue"),true)
        return "blue"
}
    else if(randomnumber==3){
    pushbutton(document.getElementById("green"),true)
        return "green"
}
}
var userinput=[]
function compareinput(){
    var failed=false
    if (userinput.length>level){
        fail=true
        failgame()
        restartgame()
    }   
    else{
        for(var i=0;i<userinput.length;i=i+1){
            if(userinput[i]!=colour[i]){
                fail=true
                restartgame()
                failgame()
            }
        }
    }
    if(failed===false&&!(userinput.length<level)){
        userinput=[]
        addsequence()
}
}
var level=0
function addsequence(){
    var randomcolour=getrandomcolour()
    colour.push(randomcolour)
    level=level+1
    $("#level-title").html("Round "+level)
}
function failgame(){
    $("body").addClass("game-over")
    setTimeout(function(){$("body").removeClass("game-over")},200)
    $("#level-title").html("Press A to Restart")
    restartgame()
}
var startgame=false
function restartgame(){
    colour=[]
    startgame=false
    level=0
    userinput=[]
}