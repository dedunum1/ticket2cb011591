const dateInput = document.getElementById('date');

// Add an event listener to the date input
dateInput.addEventListener('change', function() {
    // Get the value from the input
    const selectedDate = dateInput.value;

    // Save the value to local storage
    localStorage.setItem('selectedDate', selectedDate);
});

// Check if there's a saved date in local storage and populate the input
const savedDate = localStorage.getItem('selectedDate');
if (savedDate) {
    dateInput.value = savedDate;
}






// Function to save user inputs to local storage
function saveInputsToLocalStorage() {
    const slAdult = document.getElementById('sl-adult').value;
    const slChild = document.getElementById('sl-child').value;
    const foreignerAdult = document.getElementById('foreigner-adult').value;
    const foreignerChild = document.getElementById('foreigner-child').value;
    const infant = document.getElementById('infant').value;
  
    const inputData = {
      'slAdult': slAdult,
      'slChild': slChild,
      'foreignerAdult': foreignerAdult,
      'foreignerChild': foreignerChild,
      'infant': infant
    };
  
    localStorage.setItem('userInputs', JSON.stringify(inputData));
  }
  
  // Load user inputs from local storage if available
  function loadInputsFromLocalStorage() {
    const savedInputs = localStorage.getItem('userInputs');
    if (savedInputs) {
      const inputData = JSON.parse(savedInputs);
      document.getElementById('sl-adult').value = inputData.slAdult;
      document.getElementById('sl-child').value = inputData.slChild;
      document.getElementById('foreigner-adult').value = inputData.foreignerAdult;
      document.getElementById('foreigner-child').value = inputData.foreignerChild;
      document.getElementById('infant').value = inputData.infant;
    }
  }
  
  // Call the loadInputsFromLocalStorage function when the page loads
  window.onload = loadInputsFromLocalStorage;
  
  // Add event listener to the input fields to save data on change
  const inputFields = document.querySelectorAll('.ticket-category input');
  inputFields.forEach(input => {
    input.addEventListener('change', saveInputsToLocalStorage);
  });

  




  // Get a reference to the select element
const selectElement = document.getElementById("duration");

// Add an event listener to the select element
selectElement.addEventListener("change", function () {
  // Get the selected options
  const selectedOptions = Array.from(selectElement.selectedOptions);

  // Get an array of values from the selected options
  const selectedValues = selectedOptions.map(option => option.value);

  // Save the selected values to local storage
  localStorage.setItem("selectedOptions", JSON.stringify(selectedValues));
});







// tickets.js

document.addEventListener("DOMContentLoaded", function() {
    const summaryDiv = document.getElementById("summary");
    const submitButton = document.querySelector(".btn");

    submitButton.addEventListener("click", function() {
        // Get user inputs
        const selectedDate = document.getElementById("date").value;
        const slAdultTickets = parseInt(document.getElementById("sl-adult").value);
        const slChildTickets = parseInt(document.getElementById("sl-child").value);
        const foreignerAdultTickets = parseInt(document.getElementById("foreigner-adult").value);
        const foreignerChildTickets = parseInt(document.getElementById("foreigner-child").value);
        const infantTickets = parseInt(document.getElementById("infant").value);
        const selectedDurations = Array.from(document.querySelectorAll("#duration option:checked")).map(option => option.text);

        // Calculate total price
        const slAdultPrice = 4;
        const slChildPrice = 2;
        const foreignerAdultPrice = 10;
        const foreignerChildPrice = 5;
        const totalPrice =
            slAdultTickets * slAdultPrice +
            slChildTickets * slChildPrice +
            foreignerAdultTickets * foreignerAdultPrice +
            foreignerChildTickets * foreignerChildPrice;

        // Create the summary table HTML
        const summaryTable = `
            <table class="summary-table">
                <tr>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
                <tr>
                    <td>SL Adult</td>
                    <td>${slAdultTickets}</td>
                    <td>${slAdultTickets * slAdultPrice}</td>
                </tr>
                <tr>
                    <td>SL Child</td>
                    <td>${slChildTickets}</td>
                    <td>${slChildTickets * slChildPrice}</td>
                </tr>
                <tr>
                    <td>Foreigner Adult</td>
                    <td>${foreignerAdultTickets}</td>
                    <td>${foreignerAdultTickets * foreignerAdultPrice}</td>
                </tr>
                <tr>
                    <td>Foreigner Child</td>
                    <td>${foreignerChildTickets}</td>
                    <td>${foreignerChildTickets * foreignerChildPrice}</td>
                </tr>
                <tr>
                    <td>Infant</td>
                    <td>${infantTickets}</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td colspan="2">Selected Durations</td>
                    <td>${selectedDurations.join(", ")}</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Total</strong></td>
                    <td><strong>${totalPrice}</strong></td>
                </tr>
            </table>
        `;

        // Display the summary table
        summaryDiv.innerHTML = summaryTable; 

        // Save user inputs to local storage
        const userData = {
            selectedDate,
            slAdultTickets,
            slChildTickets,
            foreignerAdultTickets,
            foreignerChildTickets,
            infantTickets,
            selectedDurations,
            totalPrice
        };
        localStorage.setItem("userData", JSON.stringify(userData));
    });
});




// tickets.js

document.addEventListener("DOMContentLoaded", function() {
    const summaryDiv = document.getElementById("summary");
    const submitButton = document.querySelector(".btn");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        // Rest of the code for creating the summary table and saving to local storage
        // ...

        // Display the summary table
        summaryDiv.innerHTML = summaryTable;
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('name').value;
        const countryCode = document.getElementById('countryCode').value;
        const phoneNumber = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const confirmedEmail = document.getElementById('confirmedEmail').value;
        const gender = document.querySelector('input[name="Gender"]:checked').value;

        const userData = {
            fullName,
            countryCode,
            phoneNumber,
            email,
            confirmedEmail,
            gender
        };

        // Store the data in local storage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Optionally, you can clear the form inputs
        form.reset();

        alert('User data saved to local storage.');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('name').value;
        const countryCode = document.getElementById('countryCode').value;
        const phoneNumber = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const confirmedEmail = document.getElementById('confirmedEmail').value;
        const gender = document.querySelector('input[name="Gender"]:checked').value;

        const userData = {
            fullName,
            countryCode,
            phoneNumber,
            email,
            confirmedEmail,
            gender
        };

        // Store the data in local storage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Display summary table
        const summaryTable = document.createElement('table');
        summaryTable.innerHTML = `
            <tr><td>Full Name:</td><td>${fullName}</td></tr>
            <tr><td>Country Code:</td><td>${countryCode}</td></tr>
            <tr><td>Phone Number:</td><td>${phoneNumber}</td></tr>
            <tr><td>Email:</td><td>${email}</td></tr>
            <tr><td>Confirmed Email:</td><td>${confirmedEmail}</td></tr>
            <tr><td>Gender:</td><td>${gender}</td></tr>
        `;

        // Append summary table to a container element
        const summaryContainer = document.getElementById('summaryContainer');
        summaryContainer.innerHTML = '';
        summaryContainer.appendChild(summaryTable);

        // Optionally, you can clear the form inputs
        form.reset();

        alert('User data saved to local storage and summary table displayed.');
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const gender = document.querySelector('input[name="Gender"]:checked').value;

        const userData = {
            fullName,
            phoneNumber,
            email,
            gender
        };

        // Store the data in local storage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Update the summary table with user inputs
        document.getElementById('summaryName').textContent = fullName;
        document.getElementById('summaryPhone').textContent = phoneNumber;
        document.getElementById('summaryEmail').textContent = email;
        document.getElementById('summaryGender').textContent = gender;
    });
});





// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitBtn');
    
    // Add an event listener for the submit button
    submitButton.addEventListener('click', function() {
        const nameOnCard = document.querySelector('input[name="name-on-card"]').value;
        const cardNumber = document.querySelector('input[name="card-number"]').value;
        const amount = document.querySelector('input[name="amount"]').value;
        const expYear = document.querySelector('input[name="exp-year"]').value;
        const cvv = document.querySelector('input[name="cvv"]').value;

        // Create an object to store the user's payment information
        const paymentInfo = {
            nameOnCard: nameOnCard,
            cardNumber: cardNumber,
            amount: amount,
            expYear: expYear,
            cvv: cvv
        };

        // Convert the paymentInfo object to a JSON string
        const paymentInfoJSON = JSON.stringify(paymentInfo);

        // Save the JSON string to local storage
        localStorage.setItem('paymentInfo', paymentInfoJSON);

        alert('Payment information saved to local storage.');
    });
});





function generateSummary() {
    var fullName = document.getElementById('name').value;
    var countryCode = document.getElementById('countryCode').value;
    var phoneNumber = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    var summaryTable = `
        <table class="table">
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>Full Name</td>
                <td>${fullName}</td>
            </tr>
            <tr>
                <td>Mobile Number</td>
                <td>${countryCode} ${phoneNumber}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>${email}</td>
            </tr>
            <tr>
            <td>Gender</td>
            <td>${gender === 'male' ? 'Male' : gender === 'female' ? 'Female' : 'Not selected'}</td>s
            </tr>
        </table>
    `;

    document.getElementById('summaryTableDiv').innerHTML = summaryTable;
}











