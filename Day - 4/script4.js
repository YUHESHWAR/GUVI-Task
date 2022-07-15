var json1 = {
    name:"abc",
    age:12,
    ph_num:1234567890
}
var json2 = {
    ph_num:0987654321,
    name:"xyz",
    age:20
}

function display(){
    var flag=0;
   // var arr= Object.keys(json1);
    for(var key of Object.keys(json1)){
        if(!Object.keys(json2).includes(key))
            flag=1;
    }
    console.log("\n\n\t\t##########################################################\n\t\tTO COMPARE IF TWO JSON HAVE SAME PROPERTIES WITHOUT ORDER\n\t\t##########################################################\n\n");
    console.log(json1)
    console.log(json2)

    if(flag==0)
        console.log("\nBoth the JSON have the same Properties\n");
    else
        console.log("\nBoth the JSON do not have the same Properties\n");
  
}

function response(){
    if (this.readyState === 4 ){
        if(this.status === 200) {
            const data = JSON.parse(this.responseText);
            //console.log("REQUEST SUCCESS!!");
            //console.log(data);
            console.log("\n\n\t\t##########################################################\n\t\t\t\t\tPRINTING THE COUNRTY FLAGS\n\t\t##########################################################\n\n");
            data.forEach((country) => {
                console.log ("Country Name : ",country.name.common,"\nFlag : ",country["flag"],"\n###############################\n");
            })

            console.log("\n\n\t\t###########################################################\n\t\tPRINTING THE COUNTRY NAMES,REGION,SUB-REGION AND POPULATION\n\t\t###########################################################\n\n");
            data.forEach((country) => {
                 console.log ("Country Name : ",country.name.common,"\nCountry Region : ",country.region,"\nsub-region : ",country.subregion,"\nsub-region : ",country.subregion,"\nPopulation : ",country.population,"\n###############################\n");
             })
       }
       else{
           console.error("ERROR WHILE REQUESTING SERVERS");
       }
   }
}

var https = new XMLHttpRequest();
https.onreadystatechange = response;
https.open("GET","https://restcountries.com/v3.1/all");
https.send();
display();