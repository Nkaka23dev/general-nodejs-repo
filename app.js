const fs = require('fs');

fs.readFile("./docs/blog1.txt", (err, data) => {
    if (err) {
        console.log("Error! Check the directory please!")
    } else {
        console.log(data.toString())
    }
})

fs.writeFile("./docs/blog1.txt", "Hello! You will replace the text", (err, data) => {
  if(err){
    console.log(err)
  }else{
    console.log("Data writen success!")
  }
})

fs.writeFile("./docs/blog2.txt", "Hello! You will replace the text", (err, data) => {
    if(err){
      console.log(err)
    }else{
      console.log("Data writen success!")
    }
  })