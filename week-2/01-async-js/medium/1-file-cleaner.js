// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs").promises;
async function FileCleaner(){
    console.log("loading input file\n");
    
    const data = await fs.readFile("../file.txt","utf-8");
    const clearedLines = data.split("\n").map(line => line.replace(/\s+/g, ' ').trim()).filter(line => line.length > 0); 
    const dataFinal = clearedLines.join('\n');
    console.log(dataFinal + "\n");  
    await fs.writeFile("../file.txt", dataFinal, "utf-8");
    console.log("file written successfully\n");

    console.log("loading file\n");
    const dataNew = await fs.readFile("../file.txt", "utf-8");
    console.log(dataNew);
    
}

FileCleaner();
