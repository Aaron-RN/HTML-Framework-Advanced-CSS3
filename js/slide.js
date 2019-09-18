var bodyElement = getComputedStyle(document.body);
var slideBG = document.querySelector("#slideBG");
var slideTitles = new Array();
slideTitles = document.querySelectorAll(".slideTitle");
var slideDescriptions = new Array();
slideDescriptions = document.querySelectorAll(".slideDesc");
var slideButtons = new Array();
slideButtons = document.querySelectorAll(".slideButtons");

var timerSwitch = bodyElement.getPropertyValue('--slideTimer')*1000;
var loop = setInterval(function(){ChangeSlide();}, timerSwitch);

var slideNum = 1;
function ChangeSlide()
{
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