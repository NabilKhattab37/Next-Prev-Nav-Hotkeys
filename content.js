document.addEventListener("keydown", function (event) {
    // Check if Ctrl key is pressed
    if (event.ctrlKey) {
        // Check if the right arrow key is pressed (Ctrl+Right Arrow)
        if (event.key === "ArrowRight") {
            console.log("Ctrl+Right Arrow Key Pressed"); // Debugging statement

            // Get the current domain
            const currentDomain = window.location.hostname;

            // Check if the identifier for the "Next" button has been previously saved for this domain
            let nextButtonSelector = localStorage.getItem(`${currentDomain}-nextButtonSelector`);
            if (!nextButtonSelector) {
                // Prompt the user for the class identifier of the "Next" button
                nextButtonSelector = prompt(`Enter the class identifier for the 'Next' button on ${currentDomain}:`);
                if (nextButtonSelector) {
                    // Save the identifier for this domain
                    localStorage.setItem(`${currentDomain}-nextButtonSelector`, nextButtonSelector);
                }
            }

            if (nextButtonSelector) {
                simulateButtonClick(nextButtonSelector);
            }
        }

        // Check if the left arrow key is pressed (Ctrl+Left Arrow)
        if (event.key === "ArrowLeft") {
            console.log("Ctrl+Left Arrow Key Pressed"); // Debugging statement

            // Get the current domain
            const currentDomain = window.location.hostname;

            // Check if the identifier for the "Previous" button has been previously saved for this domain
            let previousButtonSelector = localStorage.getItem(`${currentDomain}-previousButtonSelector`);
            if (!previousButtonSelector) {
                // Prompt the user for the class identifier of the "Previous" button
                previousButtonSelector = prompt(`Enter the class identifier for the 'Previous' button on ${currentDomain}:`);
                if (previousButtonSelector) {
                    // Save the identifier for this domain
                    localStorage.setItem(`${currentDomain}-previousButtonSelector`, previousButtonSelector);
                }
            }

            if (previousButtonSelector) {
                simulateButtonClick(previousButtonSelector);
            }
        }
        // Check if the "H" key is pressed (Ctrl+H for clearing localStorage)
        if (event.key === "h" || event.key === "H") {
            console.log("Ctrl+H Key Pressed for Clearing localStorage"); // Debugging statement

            // Get the current domain
            const currentDomain = window.location.hostname;

            // Clear localStorage items for nextButtonSelector and previousButtonSelector
            localStorage.removeItem(`${currentDomain}-nextButtonSelector`);
            localStorage.removeItem(`${currentDomain}-previousButtonSelector`);
        }
    }
});


// Function to simulate a button click by selector
function simulateButtonClick(selector) {
    const button = document.querySelector(selector);
    if (button) {
        console.log("Button Found"); // Debugging statement
        button.click();
    } else {
        console.log("Button Not Found"); // Debugging statement
    }
}
