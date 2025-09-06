const scriptURL = "https://script.google.com/macros/s/AKfycbxm_vkhOo22SMrkGA2GzuvW_Zc5453I-Ld7QhbER9vPFPe_rjzKiE9ILNWJ2liHeAWn3g/exec";

const form = document.getElementById("dvrForm");
const response = document.getElementById("response");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    })
  })
  .then(res => {
    response.innerHTML = "✅ Thanks! We received your message.";
    form.reset();
  })
  .catch(err => {
    console.error("Error!", err.message);
    response.innerHTML = "❌ Error! Please try again.";
  });
});
