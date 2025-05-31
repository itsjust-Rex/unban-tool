async function submitRequest() {
  const input = document.getElementById("userInput").value.trim();
  const status = document.getElementById("status");

  if (!input) {
    status.textContent = "Please enter your username or ID.";
    status.style.color = "orange";
    return;
  }

  status.textContent = "Sending request...";
  status.style.color = "white";

  const botToken = "8067615974:AAFfcTQS_vgM4twu5S3xL6V-Q7uquwci0S0";
  const chatId = "6143932633";
  const message = `📢 *Unban Request*\n\n🆔 *User:* \`${input}\``;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown"
      })
    });

    if (response.ok) {
      status.textContent = "Request sent successfully!";
      status.style.color = "lightgreen";
      document.getElementById("userInput").value = "";
    } else {
      status.textContent = "Failed to send request. Try again.";
      status.style.color = "red";
    }
  } catch (error) {
    status.textContent = "Error sending request.";
    status.style.color = "red";
  }
}
