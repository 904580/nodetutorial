let a =10;
let b=0;

setTimeout(()=>{
    b=20;

},2000)

console.log(a+b);/// there is no print b value this is the async drawback....



// console.log("compile time....")

// setTimeout(()=>{

//     console.log("run time....")

// },2000)

// console.log("error time...")
 