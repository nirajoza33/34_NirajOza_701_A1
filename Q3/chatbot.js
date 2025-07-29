const responses = {
  "what courses are available?": "We offer B.Tech, B.Sc, B.Com, and MBA programs.",
  "how to apply?": "You can apply online through our college admission portal.",
  "what is the fee structure?": "The fee varies by course. Please visit the fees section on our website.",
  "what is the last date to apply?": "The last date to apply is August 31, 2025.",
  "is hostel facility available?": "Yes, hostel facilities are available for both boys and girls.",
  "exit": "Thank you! Goodbye."
};

function getResponse(question){
    const key = question.toLowerCase().trim();
    return responses[key] || "Sorry, I don't have information on that. Please try another question.";
}

module.exports = { getResponse};