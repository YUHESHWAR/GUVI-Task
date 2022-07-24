var https = new XMLHttpRequest();
https.onload = response;
https.open("GET","https://restcountries.com/v3.1/all");
https.send();

function response(){
    const data = JSON.parse(this.responseText);
    console.log(data);

    console.log("\n\n\tDISPLAYING ALL THE COUNTRIES IN ASIA");
    console.log(data.filter((ele) => ele.continents=="Asia"))

    console.log("\n\n\tDISPLAYING ALL THE COUNTRIES HAVING POPPULATION LESS THAN 2LAKHS");
    console.log(data.filter((ele) => ele.population<=200000))

    console.log("\n\n\tPRINTING THE NAME,CAPITAL,FLAG USING FOREACH FUNCTION");
    data.forEach(ele => {
        console.log("##################################\nNAME :",ele.name.common,"\nCAPITAL :",ele.capital,"\nNAME :",ele.flag);
    });

    console.log("\n\n\tPRINTING THE POPPULATION OF THE COUNTRY");
    var res = data.reduce((pre,cur,index) => {
        pre[cur.name.common]=cur.population;
        return pre;
    },{});
    console.log(res)

    console.log("\n\n\tDISPLAYING ALL THE COUNTRIES USING CURRENCY US DOLLARS");
    data.forEach(ele => {
        try{if(Object.keys(ele.currencies).includes("USD"))
        console.log("NAME :",ele.name.common);}
        catch(error){
        }
    });
}