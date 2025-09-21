let availableSeats = 300; // starting seats

document.getElementById("payBtn").addEventListener("click", () => {
  const seatsRequested = parseInt(document.getElementById("seats").value);

  if (seatsRequested > availableSeats) {
    alert("Not enough seats available!");
    return;
  }

  // Reduce available seats
  availableSeats -= seatsRequested;

  // Update display
  document.getElementById("availableSeats").textContent = "Available Seats: " + availableSeats;

  // Example: Send booking request (here only console.log for demo)
  console.log(`Booked ${seatsRequested} seat(s). Remaining: ${availableSeats}`);

  // TODO: Connect to your backend payment
  alert(`You booked ${seatsRequested} seat(s). Remaining seats: ${availableSeats}`);
});
