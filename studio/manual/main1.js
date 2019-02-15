    var pad = function(){
        $("img").css("padding", "0.5px");
    }

    var pic1 = function(){
        $("img").attr("src", "1.PNG");
    }
    $("#first").on("click", function(){
        pic1();
        pad();
    })

    var pic2 = function(){
        $("img").attr("src", "2.PNG");
    }
    $("#second").on("click", function(){
        pic2();
        pad();
    })

    var pic3 = function(){
        $("img").attr("src", "3.PNG");
    }
    $("#third").on("click", function(){
        pic3();
        pad();
    })

    var pic4 = function(){
        $("img").attr("src", "4.PNG");
    }
    $("#forth").on("click", function(){
        pic4();
        pad();
    })

    var pic5 = function(){
        $("img").attr("src", "5.PNG");
    }
    $("#fifth").on("click", function(){
        pic5();
        pad();
    })