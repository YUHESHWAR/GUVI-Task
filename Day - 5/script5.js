var arr1 = [1,31,44,55,100,100,121];
var arr2 = [2,6,9,10,12,18,20];
var ans = [],sums=0,i=0,j=0,flag=0,palin=0;
var str = "Hello",sstr,cstr;
var k = 4;

console.log("\t##################################\n\tPROGRAMS USING ANONYMOUS FUNCTIONS\n\t##################################\n","\n")

var odd = function(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0)
            ans.push(arr[i]);
    }
    console.log("Odd numbers in the array are : ",...ans,"\n\n")
}

var convert =function(str){
    sstr = str.toLowerCase();
    cstr = str.toUpperCase();
    console.log(`${str} is converted to smaller case ${sstr}`)
    console.log(`${str} is converted to upper case ${cstr}`,"\n\n")
}

var sum = function(arr1){
    for(i=0;i<arr1.length;i++){
            sums+=arr1[i];
    }
    console.log(`The sum of all the elements in an array : ${sums}`,"\n\n");
}

var prime = function(arr){
    ans = [];
    for(i=0;i<arr.length;i++){
        flag=0;
        for(j=0;j<=arr[i];j++){
            if(arr[i]%j==0)
                flag++;
        }
        if(flag<=2)
        ans.push(arr[i]);
    }
    console.log("Prime numbers in the array are : ",...ans,"\n\n")
}

var palindrome = function(arr){
    ans = [];
    for(i=0;i<arr.length;i++){
        flag=0;
        palin=0;
        var arr1 = (""+arr[i]).split("");
        arr1 = arr1.reverse();
        palin = arr1.join("");
        if(palin == arr[i])
        ans.push(arr[i]);
    }
    console.log("Palindrome numbers in the array are : ",...ans,"\n\n")
}

var getMedian = function (arr1, arr2)
{
    var n = arr1.length;
    var m = arr2.length;
    var count = (m+n)/2;
    i=0;j=0;
    for(var k = 0;k<count;k++){
        if(arr1[i]<arr2[j])
            m1 = arr1[i++];
        else
            m1 = arr2[j++];
    }

    if(arr1[i]<arr2[j])
        m2 = arr[i];
    else
        m2 = arr2[j];

    m3 = (m1+m2)/2;  

    if((m+n)%2==0)
        console.log(`Median of the two arrays is : ${m3}`,"\n\n");
    else  
        console.log(`Median of the two arrays is : ${m2}`,"\n\n");       
}

var removeDuplicates = function(arr){
    var array= new Uint16Array(500);
    ans=[];
    for(i=0;i<arr.length;i++){
        if(array[arr[i]]==0){
            array[arr[i]]=1;
            ans.push(arr[i]);
        }
    }
    console.log("The array after removing the duplicate elements :",...ans,"\n\n")    
}

var rotate = function(arr,k){
    ans = [];
    for(i=0;i<arr.length;i++){
        j=(i+k)%arr.length;
        ans[j]=arr[i];
    }
    console.log("After rotating the array for", k ,"times",...ans,"\n\n");
}

odd(arr1);
convert(str);
sum(arr1);
prime(arr1);
palindrome(arr1);
getMedian(arr1,arr2);
removeDuplicates(arr1)
rotate(arr2,k);

var arr1 = [1,31,44,55,100,100,121];
var arr2 = [2,6,9,10,12,18,20];
var ans = [],sums=0,i=0,j=0,flag=0,palin=0;
var str = "Hello",sstr,cstr;

console.log("\n\t##############################\n\tPROGRAMS USING ARROW FUNCTIONS\n\t##############################\n","\n")

var odd_arrow = (arr) => {
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0)
            ans.push(arr[i]);
    }
    console.log("Odd numbers in the array are : ",...ans,"\n\n")
}

var convert_arrow = (str) => {
    sstr = str.toLowerCase();
    cstr = str.toUpperCase();
    console.log(`${str} is converted to smaller case ${sstr}`)
    console.log(`${str} is converted to upper case ${cstr}`,"\n\n")
}

var sum_arrow = (arr1) => {
    for(i=0;i<arr1.length;i++){
            sums+=arr1[i];
    }
    console.log(`The sum of all the elements in an array : ${sums}`,"\n\n");
}

var prime_arrow = (arr) => {
    ans = [];
    for(i=0;i<arr.length;i++){
        flag=0;
        for(j=0;j<=arr[i];j++){
            if(arr[i]%j==0)
                flag++;
        }
        if(flag<=2)
        ans.push(arr[i]);
    }
    console.log("Prime numbers in the array are : ",...ans,"\n\n")
}

var palindrome_arrow = (arr) => {
    ans = [];
    for(i=0;i<arr.length;i++){
        flag=0;
        palin=0;
        var arr1 = (""+arr[i]).split("");
        arr1 = arr1.reverse();
        palin = arr1.join("");
        if(palin == arr[i])
        ans.push(arr[i]);
    }
    console.log("Palindrome numbers in the array are : ",...ans,"\n\n")
}

odd_arrow(arr1);
convert_arrow(str);
sum_arrow(arr1);
prime_arrow(arr1);
palindrome_arrow(arr1);
