const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "myfolder");
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log("Folder created: myfolder");
}   

const filepath = path.join(dirPath, "example.txt");
fs.writeFile(filepath, "Hello from Node.js!\n", (err) => {
    if (err) throw err;
    console.log("File created and written to.");

    fs.appendFile(filepath, "This line is appended.\n", (err) => {
        if (err) throw err;
        console.log("Content appended.");

        fs.readFile(filepath, "utf8", (err, data) => {
            if (err) throw err;
            console.log("File content:\n" + data);
        })

        const newFilePath = path.join(dirPath, "new-example.txt");
        fs.rename(filepath, newFilePath, (err) => {
            if (err) throw err;
            console.log("File renamed to new-example.txt");

            fs.readdir(dirPath, (err, files) => {
                if (err) throw err;
                console.log("Files in folder:", files);

                fs.unlink(newFilePath, (err) => {
                    if (err) throw err;
                    console.log("File deleted: new-example.txt");

                    fs.rmdir(dirPath, (err) => {
                        if (err) throw err;
                        console.log("Folder removed: myfolder");
                    });

                })
            })
        })
    })
})