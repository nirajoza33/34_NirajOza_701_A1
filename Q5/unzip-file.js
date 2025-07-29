const fs = require("fs");
const unzipper = require("unzipper");
const path = require("path");

function extractZip(zipFilePath, outputFolder) {
  fs.createReadStream(zipFilePath)
    .pipe(unzipper.Extract({ path: outputFolder }))
    .on("close", () => {
      console.log(`ZIP file extracted to '${outputFolder}'`);
    })
    .on("error", (err) => {
      console.error("Error extracting zip:", err);
    });
}

const zipFile = path.join(__dirname, "myfolder.zip");        
const outputPath = path.join(__dirname, "output");          

extractZip(zipFile, outputPath);
