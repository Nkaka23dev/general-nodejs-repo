const fs = require('fs');

// fs.readFile("./docs/blog1.txt", "utf8", (data, error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data.toString())
//     }
// }) 

// fs.writeFile("./docs/blog2.txt", "hello There, How is?", () => {
//      console.log("File written success")
// }) 

if (!fs.existsSync('./assets')) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log("Error", err)
        } else {
            console.log("Folder Created success")
        }
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Folder deleted")
    })
}
// if (fs.existsSync('./assets')) {
//     fs.writeFile("./assets/blog1.txt", "hello There, How is?", () => {
//         console.log("File written success")
//     })
// }

if (fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Data is deleted!")
    })
} else {
   console.log("File does not exist!")
}
