$(document).ready(function() {
  $(document).on("keypress", function(e) {      
    var char = String.fromCharCode(e.which);
  });
});

var entryCount = 0;
  var displayCount = 0;

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

  function deleteElement() {
  $("img").last().remove();
  var www = 100 / displayCount -2;
  $("img").css({"width": www+"vw", "min-width" : "10vw"});
}

 $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      if (displayCount < 0) {
        displayCount = 0;
      }
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

function createElement(k) {
var elem = $('mygifs');

  if (k == "a" || k == "A") { 
    // elem.append('<img src="video/a.gif">');}
    // <img src="video/b.gif" style="width: 23vw; min-width: 10vw;">
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/a.gif");}
  if (k == "b" || k == "B") { 
    var imageb = document.createElement("img");
    document.body.appendChild(imageb);
    imageb.setAttribute("src", "video/b.gif");}
  if (k == "c" || k == "C") { 
    var imagec = document.createElement("img");
    document.body.appendChild(imagec);
    imagec.setAttribute("src", "video/c.gif");}
  if (k == "d" || k == "D") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/d.gif");}
  if (k == "e" || k == "E") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/e.gif");}
  if (k == "f" || k == "F") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/f.gif"); }
  if (k == "g" || k == "G") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/g.gif");}
  if (k == "h" || k == "H") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/h.gif");}
  if (k == "i" || k == "I") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/i.gif");}
  if (k == "j" || k == "J") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/j.gif");}
  if (k == "k" || k == "K") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/k.gif");}
  if (k == "l" || k == "L") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/l.gif");}
  if (k == "m" || k == "M") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/m.gif");}
  if (k == "n" || k == "N") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/n.gif");}
  if (k == "o" || k == "O") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/o.gif"); }
  if (k == "p" || k == "P") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/p.gif");}
  if (k == "q" || k == "Q") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/q.gif");}
  if (k == "r" || k == "R") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/r.gif");}
  if (k == "s" || k == "S") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/s.gif");}
  if (k == "t" || k == "T") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/t.gif");}
  if (k == "u" || k == "U") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/u.gif");}
  if (k == "v" || k == "V") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/v.gif"); }
  if (k == "w" || k == "W") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/w.gif");}
  if (k == "x" || k == "X") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/x.gif");}
  if (k == "y" || k == "Y") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/y.gif");}
  if (event.key == "z" || event.key == "Z") { 
    var imagea = document.createElement("img");
    document.body.appendChild(imagea);
    imagea.setAttribute("src", "video/z.gif");}


  var www = 100 / displayCount -2;
  $("img").css({"width": www+"vw", "min-width" : "10vw"});
    // console.log(www);
}

