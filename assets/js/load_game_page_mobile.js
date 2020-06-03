// Cache your elements:
var $lba = document.getElementsByClassName('gameIcoMobile');


//go to gamepage
function gamePage() {
    var game_link = $(this).attr('data-internalid');
    var attr = $(this).attr('gameheight');
    var attr2 = $(this).attr('gamewidth');
    
    // Set local storage value for ifrme to load
    localStorage.setItem("grabLink", game_link);
    
    if(!($(this).get(0).hasAttribute("gameheight")) && !($(this).get(0).hasAttribute("gamewidth"))){
        localStorage.setItem("setheight", '517px');
        localStorage.setItem("setwidth", '800px');
        window.location = "gamepageMobile.html";
       //window.alert("attributes not found!");
        
    }
    else{
        var getHeight = $(this).attr('gameheight');
        var getWidth = $(this).attr('gamewidth');
        localStorage.setItem("setheight", getHeight);
        localStorage.setItem("setwidth", getWidth);
        window.location = "gamepageMobile.html";
        //window.alert("attributes found!");
    }

   

}

// Assign a click event handler to every element:
for(var i=0; i<$lba.length; i++) {
    $lba[i].onclick = gamePage;
}

// You nice function:
/*
function myPopup() {
    alert($(this).attr('data-internalid'));
}
*/