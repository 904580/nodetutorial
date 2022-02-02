//const fs = require ('fs');
// fs.writeFileSync("hello.txt", "hi! this is anoop saini");




// const fs = require('fs');
// console.log(">>>",__dirname);


// const fs = require('fs');
// console.log(__filename);

//---------create files--------

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// for(i=0; i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text");
// }



//readdir--------

// fs.readdir(dirPath, (err, files) => {
//     console.log(files);

// });---show the array format

//show the simple text---


// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log(item);

//     })
//     });



//CRUD operationINfile--------
//1-create file------------------------------

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`
//fs.writeFileSync(filePath, "this is the fruit files and simple text generated via node command");

//2-read file--------------------------

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);


// })

//3-update file-----------------------

// fs.appendFile(filePath,'this file created by anoop saini',(err)=>{
//     (!err)
//     console.log("file is updated");

// })


//4--rename file----------

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     (!err)
//     console.log("file name is updated");
// })



//5- delete file------------------

fs.unlinkSync(`${dirPath}/fruit.txt`);
    





