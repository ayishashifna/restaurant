```javascript
// Mobile Navigation

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");
}


// Open Reservation Popup

function openReservation() {

    document.getElementById("reservation").style.display = "flex";
}


// Close Reservation Popup

function closeReservation() {

    document.getElementById("reservation").style.display = "none";
}


// Reservation Form

function reserveTable(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    alert(
        "Thank you, " + name +
        "!\n\nYour table for " + guests +
        " guests has been requested." +
        "\nDate: " + date +
        "\nTime: " + time
    );

    document.querySelector("form").reset();

    closeReservation();
}


// About Button

function showMessage() {

    alert(
        "Welcome to Spice Garden! 🍽️\n\n" +
        "We prepare delicious food using fresh ingredients."
    );
}


// Close Popup When Clicking Outside

window.addEventListener("click", function(event) {

    const popup = document.getElementById("reservation");

    if (event.target === popup) {

        closeReservation();

    }

});
```
