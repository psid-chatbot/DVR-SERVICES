const form = document.querySelector('form');
const messageBox = document.createElement('div');
messageBox.style.marginTop = "15px";
form.appendChild(messageBox);

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Required field validation
  if (!form.name.value || !form.email.value || !form.phone.value) {
    messageBox.innerHTML = "⚠️ Please complete all required fields!";
    messageBox.style.color = "red";
    return;
  }

  messageBox.innerHTML = "⏳ Sending...";
  messageBox.style.color = "blue";

  fetch("https://script.google.com/macros/s/AKfycby6dWaSsF69bm4fZjDRqdQLQq9te-aQXkUgT16q7XvdI65oUtsVrR8oX9HGxsOi3IL6gw/exec", {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => response.json())
  .then(json => {
    if (json.result === "success") {
      messageBox.innerHTML = "✅ Thank you! Your message was sent.";
      messageBox.style.color = "green";
      form.reset();
    } else {
      messageBox.innerHTML = "❌ Error: " + (json.error || "Unknown issue");
      messageBox.style.color = "red";
    }
  })
  .catch(err => {
    console.error("Fetch error:", err);
    messageBox.innerHTML = "❌ Network error—see console.";
    messageBox.style.color = "red";
  });
});
