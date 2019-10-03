function setup(){

    createCanvas(windowWidth,580);

    var button = select("#submit");
    button.mousePressed(weatherAsk);

    input = select("#city");
    fill(0);
    siz = 10;
}

function saveFunction(){
    save('myThesisOct3.jpg');
}
