var url = "https://raw.githubusercontent.com/sssssuty/ci19/master/studio/collection/prototype-2/csvjson%20copy%208.json";
    fetch(url)
            .then(function(response){return response.json();})
            .then(function(json){ sortData(json);})

var array = json;
            // console.log(array);
            
function screenDisplay(){

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
                document.getElementById("Nnames").appendChild(peopleNames).setAttribute("class", className);
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
}