// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs").promises
async function WriteAndReadAsync(){
    await fs.writeFile("../file.txt", "This is my modification!", "utf-8")
    console.log("made changes succesfully!!\n");
    

    console.log("File Contentes:");
    const data = await fs.readFile("../file.txt", "utf-8");
    console.log(data);
    
}

WriteAndReadAsync();
