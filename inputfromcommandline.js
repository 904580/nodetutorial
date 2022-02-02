//console.log("node js tutorial");

//console.log(process.argv); //argument vector

//console.log(process.argv[5]);//get the data from argument


// const fs = require('fs');
// const input = process.argv;

// fs.writeFileSync(input[2],input[3]) //create trh file via input command line



const fs = require('fs');
const input = process.argv;

if(input[2] =='add'){

    fs.writeFileSync(input[3], input[4])     
}
 else if(input[3]=='remove'){

   fs.unlinkSync(input[3])

 }

 else{
     console.log("invalid operation")
 }

                                 