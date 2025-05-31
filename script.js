function getRandomMessage(phoneNumber) {
  const messages = [
    `Hello WhatsApp Support,\n\nMy number ${phoneNumber} was recently banned. I believe this was a mistake and I kindly request a review of my account.\n\nThanks.`,
    `Dear WhatsApp Team,\n\nPlease help me unban my number ${phoneNumber}. I use it for personal communication and I think it was banned in error.\n\nThank you.`,
    `Hi WhatsApp,\n\nMy number ${phoneNumber} was banned, possibly due to unusual activity. I assure you I use WhatsApp responsibly. Kindly assist in restoring access.\n\nSincerely.`,
    `WhatsApp Support,\n\nI am requesting an unban for my number ${phoneNumber}. I respect your policies and believe my ban was an error. Please help.\n\nRegards.`,
    `To WhatsApp,\n\nPlease consider unbanning my number ${phoneNumber}. I rely on WhatsApp daily and I believe there was a misunderstanding.\n\nThank you.`
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}

function sendUnbanRequest() {
  const input = document.getElementById("numberInput").value.trim();
  const status = document.getElementById("status");
  const button = document.getElementById("requestBtn");

  if (!input.startsWith("+") || input.length < 10) {
    status.textContent = "Please enter a valid number with country code.";
    status.style.color = "orange";
    return;
  }

  // Add loading state
  button.classList.add("loading");
  button.disabled = true;
  status.textContent = "Generating request...";

  setTimeout(() => {
    const subject = encodeURIComponent("Request for WhatsApp Number Unban");
    const body = encodeURIComponent(getRandomMessage(input));
    const mailtoLink = `mailto:support@whatsapp.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    // Optional: reset button state after redirect
    button.classList.remove("loading");
    button.disabled = false;
    status.textContent = "";
  }, 1200); // Simulate loading delay
}
