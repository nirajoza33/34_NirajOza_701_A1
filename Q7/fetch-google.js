const fetch = require("node-fetch");

async function fetchGoogleHomePage() {
    try{
        const response = await fetch("https://www.google.com");

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const body = await response.text();
        console.log("Fetched Google Home Page (partial content):\n");
        console.log(body.slice(0, 500));
    }catch(error){
        console.error("Error fetching Google:", error.message);
    }
}

fetchGoogleHomePage();