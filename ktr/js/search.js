var milgaya;
    function myfun(){
        let search=document.getElementById('search').value;
        if(search==""){
            window.alert("Enter the State/Ut to be searched");
            return ;
        }
        else{
        fetch("stateData.json")
        .then(Response=>Response.json())
        .then(data=>{
            for(var i in data){
                var str=data[i].state;
               if(str.toLowerCase()===search.toLowerCase()){
                milgaya=data[i].id;
                var y=document.getElementById("mytable");
                let mytab=document.getElementById("mytable");
                mytab.innerHTML="";
                let temp=`<tr>
                        <th>Name</th>
                        <td>${data[i].state}</td>
                        </tr>
                        <tr>
                        <th>Type</th>
                        <td>${data[i].type}</td>
                        </tr>
                        <tr>
                            <th>Established</th>
                        <td>${data[i].dateEstablished}</td>
                        </tr>
                        <tr>
                            <th>Area</th>
                        <td>${data[i].area}</td>
                        </tr>
                        <tr>
                            <th>Population</th>
                        <td>${data[i].population}</td>
                        </tr>
                        <tr>
                            <th>Administrative Capital</th>
                        <td>${data[i].adminCapital}</td>
                        </tr>
                        <tr>
                            <th>Administrative Capital</th>
                        <td>${data[i].legisCapital}</td>
                        </tr>
                        <tr>
                            <th>Legislative Capital</th>
                        <td>${data[i].judicialCapital}</td>
                        </tr>
                        <tr>
                            <th>Official Languages</th>
                        <td>${data[i].officialLangs}</td>
                        </tr>
                        <tr>
                            <th>Per Capita Income</th>
                        <td>${data[i].percapitaincome}</td>
                        </tr>
                        <tr>
                            <th>Literacy Rate</th>
                        <td>${data[i].literacyrate}</td>
                        </tr>
                        <tr>
                            <th>Health index rank</th>
                        <td>${data[i].healthindexrank}</td>
                    </tr>`
                mytab.innerHTML+=temp;
               }
            }
            if(milgaya==undefined){
                window.alert("No data found...");
            }
        })
    }
}