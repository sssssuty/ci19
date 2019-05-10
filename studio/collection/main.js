
    var url = "https://raw.githubusercontent.com/sssssuty/ci19/master/studio/collection/prototype-3/csvjson.json";
    fetch(url)
            .then(function(response){return response.json();})
            .then(function(json){ sortData(json);})


    function sortData(json){

            var array = json;
            // var relationTwoo = array.relationtwo;
            // console.log(relationTwoo);
            // console.log(array);

            for (var i = 0; i < array.length; i ++){
//foundamental layout
            array.sort(function(a,b){
                if (a.names < b.names) return -1;
                if (b.names < a.names) return 1;
                return 0;
                });

                var nn = array[i].names;
                var entryId = array[i].entryId;
                var peopleNames = document.createElement("li");
                peopleNames.innerHTML = nn;
                peopleNames.counter = i;
                var className = "name" + entryId;
                // console.log(nn);
                document.getElementById("Nnames").appendChild(peopleNames).setAttribute("class", className);
                if (nn.length == 1){
                    // console.log(entryId);
                    $(".name" + entryId).css("font-weight", "bold");
                    $(".name" + entryId).css("padding-top", "0.6vw");
                    $(".name" + entryId).css("margin-bottom", "0.3vw");
                    $(".name" + entryId).css("width", "0vw");
                    // $(".name" + entryId).css("text-decoration","underline");
                }else{
                    $(".name" + entryId).css("cursor", "pointer");
                    $(".name" + entryId).css("margin-bottom", "0.2vw");
                }
                // document.getElementById("Nnames").appendChild(peopleNames).setAttribute("onclick", myFunction());


            array.sort(function(a,b){
                if (a.year < b.year) return -1;
                if (b.year < a.year) return 1;
                return 0;
                });

                var yy = array[i].year;
                var entryId = array[i].entryId;
                var peopleYears = document.createElement("li");
                peopleYears.innerHTML = yy;
                var className = "year" + entryId;
                document.getElementById("Yyear").appendChild(peopleYears).setAttribute("class", className);


            array.sort(function(a,b){
                if (a.ists < b.ists) return -1;
                if (b.ists < a.ists) return 1;
                return 0;
                });

                var ii = array[i].ists;
                var entryId = array[i].entryId;
                var peopleIsts = document.createElement("li");
                peopleIsts.innerHTML = ii;
                var className = "ists" + entryId;
                document.getElementById("Iists").appendChild(peopleIsts).setAttribute("class", className);

            array.sort(function(a,b){
                if (a.country < b.country) return -1;
                if (b.country < a.country) return 1;
                return 0;
                });

                var cc = array[i].country;
                var entryId = array[i].entryId;
                var peopleCountry = document.createElement("li");
                peopleCountry.innerHTML = cc;
                var className = "country" + entryId;
                document.getElementById("Ccountry").appendChild(peopleCountry).setAttribute("class", className);

                var mm = array[i].message;
                var entryId = array[i].entryId;
                var peopleMessage = document.createElement("li");
                peopleMessage.innerHTML = mm;
                var className = "message" + entryId;
                document.getElementById("Mcontent").appendChild(peopleMessage).setAttribute("class", className);

                var ll = array[i].weblink;
                var entryId = array[i].entryId;
                var peopleLink = document.createElement("li");
                peopleLink.innerHTML = ll;
                var className = "link" + entryId;
                document.getElementById("webLink").appendChild(peopleLink).setAttribute("class", className);

                var ww = array[i].work;
                var entryId = array[i].entryId;
                var peopleWork = document.createElement("li");
                peopleWork.innerHTML = ww;
                var className = "work" + entryId;
                document.getElementById("workName").appendChild(peopleWork).setAttribute("class", className);
                

//first level hover effects
            array.sort(function(a,b){
                if (a.entryId < b.entryId) return -1;
                if (b.entryId < a.entryId) return 1;
                return 0;
                });

            $("#Nnames").find("li").hover(
              function(event){
              $(this).css("background-color", "red");
              var num = this.className;
              var numNewName = num.replace("name","");
              var istsClassName = "ists" + numNewName;
              var yearClassName = "year" + numNewName;
              var countryClassName = "country" + numNewName;
              // console.log(array);
              var relationTwo = array[numNewName].relationtwo;
              if (relationTwo.length > 2){
                var aa = relationTwo.split(",");
                for (var j = 0; j < aa.length; j ++){
                    $(".name" + aa[j]).css("background-color", "rgba(255,0,0,0.5)");
                }
              }else{
                var relationTwoName = "name" + relationTwo;
              $("." + relationTwoName).css("background-color", "rgba(255,0,0,0.5)");
              };
              var relationThree = array[numNewName].relationthree;
              if (relationThree.length > 2){
                var bb = relationThree.split(",");
                for (var j = 0; j < bb.length; j ++){
                    $(".name" + bb[j]).css("background-color", "rgba(255,0,0,0.1)");
                }
              }else{
                var relationThreeName = "name" + relationThree;
              $("." + relationThreeName).css("background-color", "rgba(255,0,0,0.1)");
              };
              
              $(this).css("background-color", "red");
              if ( $("." + istsClassName).html() == "artist"){document.getElementById("artist").style.backgroundColor = "red";};
              if ( $("." + istsClassName).html() == "art critic"){document.getElementById("artcritic").style.backgroundColor = "red";};
              if ( $("." + istsClassName).html() == "psychologist"){document.getElementById("psychologist").style.backgroundColor = "red";};
              if ( $("." + istsClassName).html() == "writer"){document.getElementById("writer").style.backgroundColor = "red";};

              if ( $("." + yearClassName).html() > 1499 && $("." + yearClassName).html() < 1900){document.getElementById("year1500s").style.backgroundColor = "red";};
              if ( $("." + yearClassName).html() > 1899 && $("." + yearClassName).html() < 2000){document.getElementById("year1900s").style.backgroundColor = "red";};
              if ( $("." + yearClassName).html() > 1999 && $("." + yearClassName).html() < 2020){document.getElementById("year2000s").style.backgroundColor = "red";};
              // if ( $("." + yearClassName).html() > 2009){document.getElementById("year2010s").style.backgroundColor = "red";};

              if ( $("." + countryClassName).html() == "United States"){document.getElementById("unitedStates").style.backgroundColor = "red";};
              if ( $("." + countryClassName).html() == "Austra"){document.getElementById("austra").style.backgroundColor = "red";};
              if ( $("." + countryClassName).html() == "Germany"){document.getElementById("germany").style.backgroundColor = "red";};
              if ( $("." + countryClassName).html() == "Mexico"){document.getElementById("mexico").style.backgroundColor = "red";};
              if ( $("." + countryClassName).html() == "Romania"){document.getElementById("romania").style.backgroundColor = "red";};
              // if ( $("." + countryClassName).html() == "Austra,United Kingdom"){document.getElementById("austraUnitedKingdom").style.backgroundColor = "red";};
              if ( $("." + countryClassName).html() == "China"){document.getElementById("china").style.backgroundColor = "red";};
              if ( $("." + countryClassName).html() == "United Kingdom"){document.getElementById("unitedKingdom").style.backgroundColor = "red";};
              if ( $("." + countryClassName).html() == "Italy"){document.getElementById("italy").style.backgroundColor = "red";};
              // if ( $("." + countryClassName).html() == "Lithuania,United States"){document.getElementById("lithuanUnitedStates").style.backgroundColor = "red";};
// .on( "click", function() 
                  $(this).click(function(event) {
                    var num = this.className;
                    $("#line").css({"top": "5vw","height": "0.3vw", "background-color":"black"});
                    $("#title").text($(".name" + numNewName).html());
                    $("#title").css("top","10vw");
                    $("#time").text($(".year" + numNewName).html());
                    $("#time").css("top","14vw");
                    $("#weblink").text($(".link" + numNewName).html());
                    $("#weblink").css({"margin-top": "26vw","margin-bottom":"2vw"});
                    $("#work").text($(".work" + numNewName).html());
                    $("#work").css({"top": "20vw","font-style": "italic"});
                    document.getElementById("image").setAttribute("src", $(".message" + numNewName).html());
                    // document.getElementById("image").setAttribute("src", "1.jpg");
                    $("#image").css({"width": "65vw"});
                    // $("#image").src({"top": "16vw","font-style": "italic"});
                  });
              }, 
              function(){
              $(this).css("background-color", "white");
              var num = this.className;
              var numNewName = num.replace("name","");
              var relationTwo = array[numNewName].relationtwo;
              var istsClassName = "ists" + numNewName;
              var yearClassName = "year" + numNewName;
              var countryClassName = "country" + numNewName;
              var relationTwoName = "name" + relationTwo;
              document.getElementById("artist").style.backgroundColor = "white";
              document.getElementById("artcritic").style.backgroundColor = "white";
              document.getElementById("psychologist").style.backgroundColor = "white";
              document.getElementById("writer").style.backgroundColor = "white";
              // $("." + yearClassName).css("background-color", "white");
              document.getElementById("year1500s").style.backgroundColor = "white";;
              document.getElementById("year1900s").style.backgroundColor = "white";;
              document.getElementById("year2000s").style.backgroundColor = "white";;
              // document.getElementById("year2010s").style.backgroundColor = "white";;

              document.getElementById("unitedStates").style.backgroundColor = "white";
              document.getElementById("austra").style.backgroundColor = "white";
              document.getElementById("germany").style.backgroundColor = "white";
              document.getElementById("mexico").style.backgroundColor = "white";
              document.getElementById("romania").style.backgroundColor = "white";
              // document.getElementById("austraUnitedKingdom").style.backgroundColor = "white";
              document.getElementById("china").style.backgroundColor = "white";
              document.getElementById("unitedKingdom").style.backgroundColor = "white";
              document.getElementById("italy").style.backgroundColor = "white";
              // document.getElementById("lithuanUnitedStates").style.backgroundColor = "white";
              $("." + relationTwoName).css("background-color", "white");
              if (relationTwo.length > 2){
                var aa = relationTwo.split(",");
                for (var j = 0; j < aa.length; j ++){
                    $(".name" + aa[j]).css("background-color", "white");
                }
              }
              var relationThree = array[numNewName].relationthree;
              if (relationThree.length > 2){
                var bb = relationThree.split(",");
                for (var j = 0; j < bb.length; j ++){
                    $(".name" + bb[j]).css("background-color", "white");
                }
              }else{
                var relationThreeName = "name" + relationThree;
              $("." + relationThreeName).css("background-color", "white");
              };
            });

            $("#year1500s").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.year > 1500;});
                var secondNum = firstNum.filter(function(el){return el.year < 1600;});
                for (var k = 0; k < secondNum.length; k++){
                    $(".name" + secondNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.year > 1500;});
                var secondNum = firstNum.filter(function(el){return el.year < 1600;});
                for (var k = 0; k < secondNum.length; k++){
                    $(".name" + secondNum[k].entryId).css("background-color", "white");
                };
            });

            $("#year1900s").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.year > 1899;});
                var secondNum = firstNum.filter(function(el){return el.year < 2000;});
                for (var k = 0; k < secondNum.length; k++){
                    $(".name" + secondNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.year > 1899;});
                var secondNum = firstNum.filter(function(el){return el.year < 2000;});
                for (var k = 0; k < secondNum.length; k++){
                    $(".name" + secondNum[k].entryId).css("background-color", "white");
                };
            });

            $("#year2000s").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.year > 1999;});
                var secondNum = firstNum.filter(function(el){return el.year < 2020;});
                for (var k = 0; k < secondNum.length; k++){
                    $(".name" + secondNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.year > 1999;});
                var secondNum = firstNum.filter(function(el){return el.year < 2020;});
                for (var k = 0; k < secondNum.length; k++){
                    $(".name" + secondNum[k].entryId).css("background-color", "white");
                };
            });

            // $("#year2010s").hover(function(){
            //     $(this).css("background-color", "red");
            //     var firstNum = array.filter(function(el){return el.year > 2009;});
            //     var secondNum = firstNum.filter(function(el){return el.year < 2020;});
            //     for (var k = 0; k < secondNum.length; k++){
            //         $(".name" + secondNum[k].entryId).css("background-color", "red");
            //     };
            // },function(){
            //     $(this).css("background-color", "white");
            //     var firstNum = array.filter(function(el){return el.year > 2009;});
            //     var secondNum = firstNum.filter(function(el){return el.year < 2020;});
            //     for (var k = 0; k < secondNum.length; k++){
            //         $(".name" + secondNum[k].entryId).css("background-color", "white");
            //     };
            // });

            $("#artist").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.ists == "artist";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.ists == "artist";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#artcritic").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.ists == "art critic";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.ists == "art critic";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#writer").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.ists == "writer";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.ists == "writer";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#psychologist").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.ists == "psychologist";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.ists == "psychologist";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#unitedStates").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.country == "United States";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.country == "United States";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#austra").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.country == "Austra";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.country == "Austra";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#germany").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.country == "Germany";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.country == "Germany";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#mexico").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.country == "Mexico";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.country == "Mexico";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#romania").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.country == "Romania";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.country == "Romania";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#austraUnitedKingdom").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.country == "Austra,United Kingdom";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.country == "Austra,United Kingdom";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#china").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.country == "China";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.country == "China";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#unitedKingdom").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.country == "United Kingdom";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.country == "United Kingdom";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#italy").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.country == "Italy";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.country == "Italy";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#lithuanUnitedStates").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.country == "lithuania, United States";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.country == "lithuania, United States";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#AiWeiwei").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.keyword == "AiWeiwei";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.keyword == "AiWeiwei";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#SigmundFreud").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.keyword == "SigmundFreud";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.keyword == "SigmundFreud";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#Psychoanalysis").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.keyword == "Psychoanalysis";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.keyword == "Psychoanalysis";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });

            $("#AffectTheory").hover(function(){
                $(this).css("background-color", "red");
                var firstNum = array.filter(function(el){return el.keyword == "Affect Theory";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "red");
                };
            },function(){
                $(this).css("background-color", "white");
                var firstNum = array.filter(function(el){return el.keyword == "Affect Theory";});
                for (var k = 0; k < firstNum.length; k++){
                    $(".name" + firstNum[k].entryId).css("background-color", "white");
                };
            });
}

}

$(document).ready(function(){
  $("#Nnames").on('click', function(event) {
   console.log("aaa");
   window.scrollTo(0,500);
  });
});

