let a=1;

function GetAscOrder(prop) {  
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } 
        else if (a[prop] < b[prop]) {    
        return -1;    
        }    
        return 0;    
    }    
}

function GetDescOrder(prop) {  
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } 
        else if (a[prop] > b[prop]) {    
        return -1;    
        }    
        return 0;    
    }    
}

function myfun(d){
    var tab=document.getElementById("mytable");
    tab.innerHTML="";

    fetch("stateData.json")
        .then(Response=>Response.json())
        .then(data=>{
            if(a==0){
                data.sort(GetAscOrder(d));
                for(var i in data){
                    let temp=`<tr>
                            <td>${data[i].id}</td>
                            <td>${data[i].state}</td>
                            <td>${data[i].type}</td>
                            <td>${data[i].dateEstablished}</td>
                            <td>${data[i].area}</td>
                            <td>${data[i].population}</td>
                            <td>${data[i].adminCapital}</td>
                            <td>${data[i].legisCapital}</td>
                            <td>${data[i].judicialCapital}</td>
                            <td>${data[i].officialLangs}</td>
                            <td>${data[i].percapitaincome}</td>
                            <td>${data[i].literacyrate}</td>
                            <td>${data[i].healthindexrank}</td>
                        </tr>`
                    tab.innerHTML+=temp;
                }
    
                a=1;
            }
            else
            {
                data.sort(GetDescOrder(d));
                for(var i in data){
                    let temp=`<tr>
                                <td>${data[i].id}</td>
                                <td>${data[i].state}</td>
                                <td>${data[i].type}</td>
                                <td>${data[i].dateEstablished}</td>
                                <td>${data[i].area}</td>
                                <td>${data[i].population}</td>
                                <td>${data[i].adminCapital}</td>
                                <td>${data[i].legisCapital}</td>
                                <td>${data[i].judicialCapital}</td>
                                <td>${data[i].officialLangs}</td>
                                <td>${data[i].percapitaincome}</td>
                                <td>${data[i].literacyrate}</td>
                                <td>${data[i].healthindexrank}</td>
                            </tr>`
                    tab.innerHTML+=temp;
                }
                a=0;

            }  
        });
};
fetch("stateData.json")
.then(Response=>Response.json())
.then(data=>{
    var tab=document.getElementById("mytable");
    for(var i in data){
        let temp=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].state}</td>
                    <td>${data[i].type}</td>
                    <td>${data[i].dateEstablished}</td>
                    <td>${data[i].area}</td>
                    <td>${data[i].population}</td>
                    <td>${data[i].adminCapital}</td>
                    <td>${data[i].legisCapital}</td>
                    <td>${data[i].judicialCapital}</td>
                    <td>${data[i].officialLangs}</td>
                    <td>${data[i].percapitaincome}</td>
                    <td>${data[i].literacyrate}</td>
                    <td>${data[i].healthindexrank}</td>
                </tr>`
        tab.innerHTML+=temp;
    }
});
  