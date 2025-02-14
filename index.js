document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput) {
      addMessage(userInput, "user-message");
      setTimeout(() => {
        addMessage(generateBotResponse(userInput), "bot-message");
      }, 500);
      document.getElementById("user-input").value = "";
    }
  });
  
  document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      document.getElementById("send-btn").click();
    }
  });
  
  function addMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function generateBotResponse(userMessage) {
    const botResponses = [
      "That's interesting!",
      "Can you tell me more?",
      "I'm here to help.",
      "Why do you think that?",
      "Good question!",
      "Let's discuss that further.",
    ];
    return botResponses[Math.floor(Math.random() * botResponses.length)];
  }
  