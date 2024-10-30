document.getElementById('carbonCalculator').addEventListener('submit', function(event) {
    event.preventDefault();
    const usage = document.getElementById('usage').value;
    const carbonFootprint = usage * 0.2; // Example calculation
    document.getElementById('result').innerText = `Your estimated carbon footprint is ${carbonFootprint.toFixed(2)} kg CO2 per month.`;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}. Your message has been sent!`);
    // You can implement the actual email sending functionality here.
});