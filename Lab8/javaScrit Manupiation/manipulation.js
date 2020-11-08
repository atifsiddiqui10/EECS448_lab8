function changeColors()
{

    var redBor = document.getElementById("redBorder").value;
    var blueBor = document.getElementById("blueBorder").value;
    var greenBor = document.getElementById("greenBorder").value;
    var widthBor = document.getElementById("widthBorder").value;

    var redBack = document.getElementById("redBackground").value;
    var blueBack = document.getElementById("blueBackground").value;
    var greenBack = document.getElementById("greenBackground").value;

    var change = document.getElementById("changes");


    change.style.backgroundColor = 'rgb(' + redBack + ',' + greenBack + ',' + blueBack + ')';

    change.style.borderWidth = widthBor + "px";
    change.style.borderColor = 'rgb(' + redBor + ',' + greenBor + ',' + blueBor + ')'
}
