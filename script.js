// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Function to calculate the angle between two points
function getAngle(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    return angle;
}

// Function to smoothly move the cursor toward the mouse position
function moveCursor(targetX, targetY) {
    const currentX = parseFloat(cursor.style.left) || 0;
    const currentY = parseFloat(cursor.style.top) || 0;

    // Calculate the distance between the current position and the target
    const dx = targetX - currentX;
    const dy = targetY - currentY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Move the cursor toward the target with a speed factor (adjust as needed)
    const speed = 0.05; // Adjust this value for faster or slower movement
    if (distance > 1) {
        cursor.style.left = currentX + dx * speed + 'px';
        cursor.style.top = currentY + dy * speed + 'px';

        // Calculate the angle for rotation
        const angle = getAngle(currentX, currentY, targetX, targetY);
        cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

        // Request the next frame to continue the animation
        requestAnimationFrame(() => moveCursor(targetX, targetY));
    }
}

// Update the cursor position when the mouse moves
document.addEventListener('mousemove', (e) => {
    const cursorX = e.pageX;
    const cursorY = e.pageY;

    // Start the animation to move the cursor toward the mouse position
    moveCursor(cursorX, cursorY);
});