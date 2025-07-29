const fs = require("fs");
const archiver = require("archiver");
const path = require("path");

function zipfolder(sourceFolder, outpath){
    const output = fs.createWriteStream(outpath);
    const archive = archiver("zip",{
        zlib:{level:9}
    });

    output.on("close", ()=>{
        console.log(`Folder zipped successfully. Total bytes ${archive.pointer()} `);
    });

    
    archive.on("error", (err) => {
        throw err;
    });

    archive.pipe(output);
    archive.directory(sourceFolder,false);
    archive.finalize();

}

const folderToZip = path.join(__dirname, "myfolder");
const zipFilePath = path.join(__dirname, "myfolder.zip");

zipfolder(folderToZip, zipFilePath);
