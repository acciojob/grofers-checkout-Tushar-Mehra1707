// Select all elements with the class 'prices'
const priceElements = document.querySelectorAll('.prices');

// Initialize total
let total = 0;

// Skip the header row by starting from index 1
for (let i = 1; i < priceElements.length; i++) {
  const value = parseFloat(priceElements[i].textContent);
  if (!isNaN(value)) {
    total += value;
  }
}

// Create a new table row for total
const totalRow = document.createElement('tr');
totalRow.classList.add('total-row');

// Create a cell with colspan to span both columns
const totalCell = document.createElement('td');
totalCell.setAttribute('colspan', '2');
totalCell.textContent = `Total Price: ₹${total}`;

// Append cell to row, and row to table
totalRow.appendChild(totalCell);
document.getElementById('groceryTable').appendChild(totalRow);
