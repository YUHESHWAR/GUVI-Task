var count_data = document.querySelector("#countdown");
var i = 10;
document.body.style.backgroundColor="rgb(230, 230, 230)"
let call_main = () =>{
    count();
    console.log("TEST");
}
let count = () =>{
    console.log("TEST1");
    var inter = setTimeout(()=>{
        console.log("TEST2");
        count_data.textContent=i--;
        if(i==-1){
            var ele = document.createElement('h1')
            ele.innerText="HAPPY INDEPENDANCE DAY";
            ele.style.backgroundImage="url('https://media.istockphoto.com/photos/indian-independence-day-celebration-background-concept-indian-flag-on-picture-id1264737727?k=20&m=1264737727&s=170667a&w=0&h=F9wRvelOMg18Lg1fnKtjCajfyww0bKKwCToV_-aiqhQ=')";
            ele.style.backgroundRepeat="no-repeat";
            ele.style.backgroundSize="auto";
            ele.style.display="inline";
            ele.style.textAlign="centre";
            ele.style.padding="30px 20px";
            // ele.style.border="5px solid ";
            ele.style.borderRadius="20px";
            ele.style.color="rgb(255, 153, 0)";
            ele.style.fontSize="35px";
            document.body.append(ele);
            clearTimeout(inter);
        }
        else{
            call_main();
        }   
    },1000);
}

call_main();

