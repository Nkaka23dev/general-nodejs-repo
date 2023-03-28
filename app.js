const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })

// fs.writeFile('./docs/blog1.txt', "Yes I ssen yo", (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File written")
//     }
// }) 

if (!fs.existsSync("./assets")) {
    fs.mkdir('./assets', (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Folder Create")
        }
    })
} else {
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Folder Removed")
        }
    })
}

if (fs.existsSync("./docs/deleteMe.js")) {
    fs.unlink("./docs/deleteMe.js", (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("File deleted success!")
        }
    })
}else {
    console.log("File Does not exist!!")
}