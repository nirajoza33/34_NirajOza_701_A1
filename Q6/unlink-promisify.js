const fs = require("fs");
const path = require("path");

function unlinkFile(filepath){
    return new Promise((resolve,reject) => {
        fs.unlink(filepath, err => {
            if(err){
                reject(err);
            }
            else{
                resolve(`File ${filepath} deleted successfully`);
            }
        });
    });
}

const fileToDelete = path.join(__dirname, "sample.txt");

unlinkFile(fileToDelete)
.then((messgae) => console.log("true : ", messgae))
.catch((err) => console.error("false :", err.messgae))