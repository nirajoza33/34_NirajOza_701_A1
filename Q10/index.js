console.log("File name:", __filename);
console.log("Directory name:", __dirname);


setTimeout(() => {
  console.log("This message is shown after 2 seconds.");
}, 2000);

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval count: ${count}`);

  if (count >= 3) {
    clearInterval(intervalId);
    console.log("Interval cleared after 3 times.");
  }
}, 1000);

console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Current working directory:", process.cwd());

setTimeout(() => {
  console.log("Exiting the program.");
  process.exit(0); 
}, 5000);
