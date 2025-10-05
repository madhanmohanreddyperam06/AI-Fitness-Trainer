function chat() {
  const input = document.getElementById("chat-input").value.toLowerCase();
  let response = "";

  if (input.includes("chest")) response = "Start chest exercises 👉 chest.html";
  else if (input.includes("arms") || input.includes("biceps")) response = "Try arms workout 👉 biceps-triceps.html";
  else if (input.includes("legs")) response = "Here’s a leg routine 👉 leg.html";
  else if (input.includes("shoulders")) response = "Work on shoulders 👉 shoulder.html";
  else response = "Sorry, I couldn't match that. Try 'chest', 'legs', etc.";

  document.getElementById("response").innerText = response;
}
