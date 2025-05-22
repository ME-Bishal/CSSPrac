// console.log("Hello World Once More");
// const profile={
//     fullname:"Bishal Maharjan",
//     vollständigerName:"Bishal Maharjan",
//     isFollow:false,
//     folgt:false,
//     posts:195,
//     beiträge:195,
//     followers:569,
//     Anhänger:569,
//     following:4,
//     folgende:4,
//     beruf:"student"
// }
// console.log(profile);
// document.write(profile.fullname);

// let a=5;
// let b=10;
// document.write(a+b);
// document.write(a-b);
// document.write(a*b);
// document.write(b/a);
// let a=prompt("Enter a number")
// if(a%2==0){
//     console.log("a is even");

// }
// else{
//     console.log("a is odd");
// }
// a=16?"a is 16":"a is 17";

// console.log(a);
// if(a%5===0){
//     console.log("a is multiple of 5");
// }
// else{
//     console.log("a is not multiple of 5");
// }
// let marks=prompt("Enter the marks of the student");
// if(marks>=90&&marks<100){
//     console.log("Congrats on Getting A");
// }
// else if(marks>=70&&marks<90){
//     console.log("Congrats on Getting B");
// }
// else if(marks>=60&&marks<70){
//     console.log("You got C");
// }
// else if(marks>=50&&marks<60){
//     console.log("You got D");
// }
// else if(marks>=0&&marks<50){
//     console.log("You got F");
// }
// else{98
//     console.error("Invalid Number");
// }



// let marks=prompt("Enter the student's marks");
// let grade;
// if(marks>=90&&marks<100){
//     grade="A";
// }
// else if(marks>=70&&marks<90){
//     grade="B";}
//     else if(marks>=60&&marks<70){
//         grade="C";}
//         else if(marks>=50&&marks<60){
//             grade="D";}
//             else if(marks>=0&&marks<50){
//                 grade="E";}
//                 else{
//                     console.error("INvalid number");
//                 }
                
//                 console.log("Your marks is",grade);


// for(let i=1;i<=5;i++){
//     console.log("Bishal Maharjan");
// // }
// let myName="Bishal Maharjan";
// let size=0;
// for(val of myName){
//     console.log(val);
//     size++
// }
// console.log(size);
// let obj={
//     key:"value",
//     attriute:123,
//     isTrue:false,
//     symbol:Symbol("a")

// }
// for(val in obj){
//     console.log(val);
//     console.log("key=",val,"value=",obj[val]);
// }
// let number=0;
// for(let number=2;number<100;number+=2){
//     console.log(number)
// }
// for(let number=0;number<100;number+=2){
//     console.log(number)
// }
// for(let num=0;num<=100;num++){
//     console.log(num)
// }
// let correctNumber=prompt("Enter the winner number");
// let number=prompt("Enter your numer");
// if((number-correctNumber)<10==correctNumber ||(number-correctNumber)>10==correctNumber){
//     console.log("You are closer")
// }
// else if(number>correctNumber){
//     console.log("The winner number is smaller than your number");
// }
// else if(number<correctNumber){
//     console.log("The winner number is bigger than your number")
// }
// else{
//     console.error("Invalid Number")
// }

// let userName=prompt("Enter your Name");
// console.log(`@${userName}${userName.length}`)
// let array=[50,24,27,93,73,83,92];
// let sum=0;
// for(val of array){
//     sum=sum+val;
// }
// console.log(sum);
// let average=sum/array.length;
// console.log(average);
// let array=[50,25,60,200,240,80];
// // let i=0;//index
// // for(val of array){
// //     console.log(`Value before offer at index ${i} is ${val}`);
// //     let offer=val/10;
// //     array[i]=array[i]-offer;
// //     console.log(`Value after offer at index ${i} is ${array[i]}`)
// //     i++;
// // }
// array.push("900");array.pop();array.pop()

// for(i=0;i<array.length;i++){
//     // console.log(array);
//     let offer=array[i]/10;
//     array[i]=array[i]-offer;
// }
// console.log(array);
// console.log(array.toString());
// let companyName=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // companyName.shift();
// console.log(companyName);
// companyName.splice(2,1,"Ola");
// console.log(companyName);
// companyName.push("Amazon");
// // console.log(companyName);
// function sumNumber(a,b){
//     console.log(a+b);
// }
// sumNumber(Number(prompt("Enter number a")),Number(prompt("Enter number b")));

// const mul=(a,b)=>{
//     m=a*b;
//     return m;
// }
// let val=mul(5,4)
// console.log(val);
// const multiplication=(a,b)=>{
//     console.log(a*b);
// }
// function vowelCount(str){
//     let count=0;
//     for(i of str){
//         if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// const vowelFinder=(str)=>{
//     let count=0;
//     for(vowelCount of str){
//     if(vowelCount==="a"||vowelCount==="e"||vowelCount==="i"||vowelCount==="o"||vowelCount==="u")
//         {count++}}
//     console.log(count);
// }
// const sentence=(str)=>{
//     let count=0;
//     for(vowelIs of str){
//     if(vowelIs==="a"){
//         count++;
//     }
//     }
//     console.log(count)
// }
// array=[2,23,34,75,23,75723,432,543,4]
// // array.forEach(element => {
// //     console.log(element*element);
// // });
// let array1=array.filter(element=>{
//    return element%2===0
// });
// console.log(array1)
// marks=[48,70,83,95,92,16,90,26,97,37,98]
// let output=marks.filter((element)=>{
// return element>90
// })
// console.log(output)
// let newText=document.querySelector("h2");
// newText.innerText+=" From Apna College";
// let firstChildDiv=document.querySelectorAll(".box")
// let div1=firstChildDiv[0];
// // console.log(div1.innerText)
// firstChildDiv[0].innerText=firstChildDiv[0].innerText+" Changes in the div 1";
// console.log(div1)
// console.log(firstChildDiv)

// let div2=firstChildDiv[1];
// firstChildDiv[1].innerText=firstChildDiv[1].innerText+" Changes in 2"

// let div3=firstChildDiv[2];
// firstChildDiv[2].innerText=firstChildDiv[2].innerText+" Changes in 3rd"
// let newText=document.createElement("h1");
// newText.innerHTML="<i>Hello</i>";
// document.querySelector("body").prepend(newText);
let btn=document.querySelector("button");
let mode="white";
btn.addEventListener("click",()=>{
    
if(mode=="white"){
    document.body.style.backgroundColor="black";
    mode="black";
    console.log(mode);
}
else{
    document.body.style.backgroundColor="white";
    mode="white";
     console.log(mode);
}
}


);