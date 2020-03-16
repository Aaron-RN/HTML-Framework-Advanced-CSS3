let bodyElement = getComputedStyle(document.body);
const allElements = document.querySelectorAll("*");
const bgSize = document.querySelector(".bg-responsive-size");
const debugButton = document.querySelector(".debug-toggle");
debugButton.addEventListener("click", function() {DebugToggle()});
const gridButton = document.querySelector("#gridButton");
gridButton.addEventListener("click", function() {GridToggle()});

const slideBG = document.querySelector("#slideBG");
const slideTitles = document.querySelectorAll(".slideTitle");
const slideDescriptions = document.querySelectorAll(".slideDesc");
const slideButtons = document.querySelectorAll(".slideButtons");
const slideElements = document.querySelectorAll("#slideBG, .slideTitle, .slideDesc, .slideButtons");

const allColClasses = new Array();

let timerSwitch = bodyElement.getPropertyValue('--slideTimer')*1000;
let loop = setInterval(function(){ChangeSlide();}, timerSwitch);

PopulateColClasses();
ColCreation();

function RemoveClass(elem,classToRemove)
{
    elem.classList.remove(classToRemove);
}

//Populates allColClasses array with all possible combinations of the col-*-m*-* class
function PopulateColClasses(){
    var str = "";
    var substr1 = "col-";
    var substr2 = 1;
    var substr3 = "-m";
    var substr4 = 1;
    var substr5 = "-";
    var substr6 = 1;
    var counter = 0;
    for(var i = 1; i <= 12; i++){
        for(var o = 1; o <= 12; o++){
            substr4 = o;
            str = substr1 + substr2.toString() + substr3 + substr4.toString() + substr5 + substr6.toString();
            if(!allColClasses.includes(str)) allColClasses.push(str);
            for(var u = 1; u <= 12; u++){
                substr6 = u;
                str = substr1 + substr2.toString() + substr3 + substr4.toString() + substr5 + substr6.toString();
                if(!allColClasses.includes(str)) allColClasses.push(str);
            }
        }
        substr2 = i;
        str = substr1 + substr2.toString() + substr3 + substr4.toString() + substr5 + substr6.toString();
        if(!allColClasses.includes(str)) allColClasses.push(str);
    }
}

//Grabs all elements that contain the col-*-m*-* class and adds the value to the element's data-col attribute
function ColCreation(){
    for(var i = 0; i < allElements.length; i++){
        var colStart = allElements[i].className.indexOf("col-");
        var colEnd = allElements[i].className.indexOf(" ", colStart);
        var str = allElements[i].className.slice(colStart, colEnd);
        if(allColClasses.includes(str)){
            allElements[i].setAttribute('data-col', str);
        }
    }
}
function DebugToggle()
{
    bgSize.classList.toggle("hide");
    for(var i = 0;i < allElements.length; i++)
        { 
            allElements[i].classList.toggle("debug");
        }
}
function GridToggle()
{
    var gridExamplesSection = document.querySelector("#grid-Examples");
    gridExamplesSection.classList.toggle("hide");
    gridExamplesSection.classList.toggle("animate-slideUp");
}
var slideNum = 1;
function ChangeSlide()
{
    for(var n = 0; n<slideElements.length;n++){
        slideElements[n].classList.toggle("animate-slideLeft");
    }
    //var timer = setInterval(function(){RemoveClass(slideBG,"animate-slideLeft");}, 1000);
    setTimeout(function() {
        for(var n = 0; n<slideElements.length;n++){
            RemoveClass(slideElements[n],"animate-slideLeft")
        }
    }, (1 * 1000));
    if(slideNum==1)
        {
            slideBG.classList.remove("bg-slide-1");
            slideBG.classList.add("bg-slide-2");
            for(var i = 0;i < slideTitles.length; i++)
                {
                    slideTitles[i].innerHTML=bodyElement.getPropertyValue('--slideTitle-2');
                    slideDescriptions[i].innerHTML=bodyElement.getPropertyValue('--slideDesc-2');
                    slideButtons[i].innerHTML='<a href="#" class="col button arrow-slide"><span class="uppercase">SHOP NOW</span> <i class="fas fa-chevron-right"></i></a>'
                }
            slideNum = 2;
        }
    else
        {
            slideBG.classList.remove("bg-slide-2");
            slideBG.classList.add("bg-slide-1"); 
            for(var i = 0;i < slideTitles.length; i++)
                {
                    slideTitles[i].innerHTML=bodyElement.getPropertyValue('--slideTitle-1');
                    slideDescriptions[i].innerHTML=bodyElement.getPropertyValue('--slideDesc-1');
                    slideButtons[i].innerHTML='<a href="#" class="col button arrow-slide"><span class="uppercase">LEARN MORE</span> <i class="fas fa-chevron-right"></i></a><a href="#" class="col text-white arrow-slide m-l-20"><span class="uppercase">Find Events Near You</span> <i class="fas fa-chevron-right"></i></a>'
                }
            slideNum = 1;
        }
}