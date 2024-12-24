document.getElementById('futureLetterForm').addEventListener('submit', async function (event) {
    event.preventDefault();  // Prevent form from reloading the page

    // Get form data
    const letter = document.getElementById('letter').value.trim();
    const email = document.getElementById('email11').value.trim();
    const reminderTime = document.getElementById('reminder-time').value; // Time in months

    // Check if the letter and email are provided
    if (!letter || !email) {
        alert('please fill out the letter and email!');
        return;
    }

    // Create data object
    const formData = {
        letter,
        email,
        reminderTime
    };

    try {
        // Send data to backend API
        const response = await fetch('http://localhost:3000/send-letter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)  // Send the form data as JSON
        });

        // Handle response
        if (response.ok) {
            alert("letter submitted successfully! a reminder will be sent to you ૮꒰˵• ﻌ •˵꒱ა");
        } else {
            alert("error occurred whilst submitting your letter. please try again ૮𐔌っ˕ -｡꒱ྀི𑁬");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("currently a concept, maybe one day it shall exist . . . ૮𐔌っ˕ -｡꒱ྀི𑁬");
    }
    
});