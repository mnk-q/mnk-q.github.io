var state1, state2;
function myfun() {
    var s1 = document.getElementById("state1").value;
    var s2 = document.getElementById("state2").value;
    if (s1 == "" || s2 == "") {
        window.alert("Data Insufficient...")
        return;
    }
    else {
        fetch("stateData.json")
        .then(Response => Response.json())
        .then(data => {
                for (var i in data) {
                    var str = data[i].state;
                    if(str.toLowerCase() == s1.toLowerCase()){
                        state1=i;
                    }
                    if(str.toLowerCase() == s2.toLowerCase()){
                        state2=i;
                    }
                }
            if(state1!=undefined && state2!=undefined){
                var x=document.getElementById("content");
                var mytab=document.getElementById("mytable");
                mytab.innerHTML="";
                let temp=`<tr>
                    <th>Name</th>
                    <td>${data[state1].state}</td>
                    <td>${data[state2].state}</td>
                    </tr>
                    <tr>
                    <th>Type</th>
                    <td>${data[state1].type}</td>
                    <td>${data[state2].type}</td>
                    </tr>
                    <tr>
                        <th>Established</th>
                    <td>${data[state1].dateEstablished}</td>
                    <td>${data[state2].dateEstablished}</td>
                    </tr>
                    <tr>
                        <th>Area</th>
                    <td>${data[state1].area}</td>
                    <td>${data[state2].area}</td>
                    </tr>
                    <tr>
                        <th>Population</th>
                    <td>${data[state1].population}</td>
                    <td>${data[state2].population}</td>
                    </tr>
                    <tr>
                        <th>Administrative Capital</th>
                    <td>${data[state1].adminCapital}</td>
                    <td>${data[state2].adminCapital}</td>
                    </tr>
                    <tr>
                        <th>Administrative Capital</th>
                    <td>${data[state1].legisCapital}</td>
                    <td>${data[state2].legisCapital}</td>
                    </tr>
                    <tr>
                        <th>Legislative Capital</th>
                    <td>${data[state1].judicialCapital}</td>
                    <td>${data[state2].judicialCapital}</td>
                    </tr>
                    <tr>
                        <th>Official Languages</th>
                    <td>${data[state1].officialLangs}</td>
                    <td>${data[state2].officialLangs}</td>
                    </tr>
                    <tr>
                        <th>Per Capita Income</th>
                    <td>${data[state1].percapitaincome}</td>
                    <td>${data[state2].percapitaincome}</td>
                    </tr>
                    <tr>
                        <th>Literacy Rate</th>
                    <td>${data[state1].literacyrate}</td>
                    <td>${data[state2].literacyrate}</td>
                    </tr>
                    <tr>
                        <th>Health index rank</th>
                    <td>${data[state1].healthindexrank}</td>
                    <td>${data[state2].healthindexrank}</td>
                </tr>`
            mytab.innerHTML+=temp;
            }
            else{
                window.alert("No Data Found...");
            }
            })
    }
}