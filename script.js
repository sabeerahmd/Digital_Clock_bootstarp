function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
    hours = hours % 12; // Convert to 12-hour format
    hours = hours ? String(hours).padStart(2, '0') : '12'; // Handle midnight as 12

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`; // Format time string
    document.getElementById('clock').textContent = timeString;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
