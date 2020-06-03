// Cache your elements:
var $actbut = document.getElementById('actIMG');
var $advbut = document.getElementById('adventureIMG');
var $casbut = document.getElementById('casualIMG');
var $puzbut = document.getElementById('puzzleIMG');
var $spobut = document.getElementById('sportsIMG');
var $strbut = document.getElementById('strategyIMG');
//var $brandbut = document.getElementById('brand-logo');


//go to gamepage
function menuPage() {
    var menu_link = $(this).attr('data-internalid');

   window.location = menu_link;

}

// Assign a click event handler to every element:
$actbut.onclick = menuPage;
$advbut.onclick = menuPage;
$casbut.onclick = menuPage;
$puzbut.onclick = menuPage;
$spobut.onclick = menuPage;
$strbut.onclick = menuPage;
//$brandbut.onclick = menuPage;



