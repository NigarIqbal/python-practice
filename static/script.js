document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded

  function reverseString() {
    const inputString = document.getElementById('input_string').value;
    fetch('/reverse', {
        method: 'POST',
        body: new URLSearchParams({ 'input_string': inputString }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerText = `Reversed String: ${data}`;
    });
  }

  function changeCase() {
    const inputString = document.getElementById('input_string').value;
    fetch('/changecase', {
        method: 'POST',
        body: new URLSearchParams({ 'input_string': inputString }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerText = `Changed Case String: ${data}`;
    });
  }

  function encryptString() {
    const inputString = document.getElementById('input_string').value;
    fetch('/encrypt', {
        method: 'POST',
        body: new URLSearchParams({ 'input_string': inputString }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerText = `SHA-256 Hash: ${data}`;
    });
  }

  // Attach event listeners to buttons
  document.getElementById('reverseButton').addEventListener('click', reverseString);
  document.getElementById('changeCaseButton').addEventListener('click', changeCase);
  document.getElementById('encryptButton').addEventListener('click', encryptString);
});
