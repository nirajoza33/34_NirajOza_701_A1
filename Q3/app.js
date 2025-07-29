const readline = require("readline");
const chatbot = require("./chatbot");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log("Welcome To Chatbot");
console.log("Type your question (type 'exit' to quit):");

rl.prompt();

rl.on("line",(input) =>{
    const response = chatbot.getResponse(input);
    console.log("----->", response);

    if(input.trim().toLowerCase() === "exit"){
        rl.close();
    }
    else{
        rl.prompt();
    }
});