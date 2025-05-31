function getRandomMessage(phoneNumber) {
  const messages = [
    `Dear WhatsApp Support,\n\nI am writing to formally request a review of the ban placed on my number ${phoneNumber}. I understand the importance of adhering to your policies and believe this may have been a misunderstanding. Kindly assist in restoring access, as this number is essential for my day-to-day communication.\n\nThank you in advance.`,

    `Hello WhatsApp Team,\n\nMy WhatsApp number ${phoneNumber} has been banned, and I believe this was done in error. I have always used the platform responsibly and in accordance with your terms. This number is linked to important conversations and work matters. Please consider reinstating it.\n\nKind regards.`,

    `To WhatsApp Support,\n\nI respectfully request a manual review of my account (${phoneNumber}). I believe the restriction was automatic and may not reflect my actual usage. I value the platform and depend on it for both personal and business needs. Kindly look into this and help restore my access.\n\nSincerely.`,

    `Hi WhatsApp,\n\nMy number ${phoneNumber} was recently banned. I’m aware of your guidelines and always aim to comply with them. If there’s any specific reason behind this action, I’d appreciate clarity. Otherwise, please help me regain access. This account is crucial to my communication.\n\nThanks for your support.`,

    `WhatsApp Support,\n\nI am requesting your help regarding a ban on my account: ${phoneNumber}. I use this number to manage critical personal and business interactions. I assure you there has been no intentional violation. Kindly review my case and assist in lifting the ban.\n\nThank you for your time and assistance.`
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

    // Optional: Reset button state after redirection attempt
    button.classList.remove("loading");
    button.disabled = false;
    status.textContent = "";
  }, 1200);
}
