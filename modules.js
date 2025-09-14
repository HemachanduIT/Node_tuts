
// node-->os module link= https://nodejs.org/api/os.html
const os=require('os');
console.log(os.hostname());
console.log(os.freemem());

//node--> fs module link=https://nodejs.org/api/fs.html
const fs=require('fs');
// creating a sample file
fs.writeFile('./sample.txt','testing fs module',(err)=>{
    if(err){
        console.log("error found");
        return
    }
    console.log("file created succesfully");
})
// reading the sample file without encoding format

// fs.readFile('./sample.txt',(err,data)=>{
//     if(err){                                  // data will be in buffer format because we haven't used encoding format
//         console.log("error found");          //data in file is <Buffer 74 65 73 74 69 6e 67 20 66 73 20 6d 6f 64 75 6c 65>
//         return
//     }
//     console.log("data in file is",data)
// })

// // reading the sample file with encoding format

fs.readFile('./sample.txt','utf8',(err,data)=>{
    if(err){                                         // data will be in normal text format because we have used encoding format
        console.log("error found");                  //data in file is: testing fs module
        return                                 
    }
    console.log("data in file is:",data)
})