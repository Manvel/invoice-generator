import { numberToWords } from './numberToWords.js';

// Initial state
const state = {
    provider: {
        name: "John Doe PE",
        address: "Example 3 str., Apt. 101",
        city: "Amsterdam",
        country: "Netherlands",
        tin: "12345678",
        bankAccount: "1234567890123456",
        bankName: "MOCK BANK CJSC",
        swift: "MOCKAM22",
        bankAddress: "1 Bank Street, Amsterdam 1011",
        intermediaryBank: "MOCK BANK EU",
        intermediarySwift: "MOCKEM22"
    },
    client: {
        name: "Mock Client Inc.",
        address: "123 Example Street",
        city: "San Francisco, CA 94101",
        country: "United States"
    },
    invoice: {
        number: "105",
        date: "04.04.2025",
        agreementDate: "15.02.2023",
        items: [
            {
                description: "Development services (per agreement)",
                quantity: 1,
                period: "01.03-31.03.2025",
                amount: 1800
            },
            {
                description: "Reimbursable expenses",
                quantity: 1,
                period: "01.03-31.03.2025",
                amount: 200
            }
        ]
    }
};

// Helper function to update elements with data attributes
function updateElements(category, data) {
    document.querySelectorAll(`[data-${category}]`).forEach(element => {
        const field = element.getAttribute(`data-${category}`);
        if (data[field] !== undefined) {
            element.textContent = data[field];
        }
    });
}

// Update the DOM with state data
function updateDOM() {
    // Update provider, client, and invoice details
    updateElements('provider', state.provider);
    updateElements('client', state.client);
    updateElements('invoice', state.invoice);

    // Update invoice items
    const itemsContainer = document.querySelector('[data-invoice="items"]');
    const totalAmount = state.invoice.items.reduce((sum, item) => sum + item.amount, 0);
    const amountInWords = numberToWords(totalAmount);
    
    itemsContainer.innerHTML = state.invoice.items.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${item.description}</td>
            <td>${item.quantity}</td>
            <td>${item.period}</td>
            <td>$${item.amount.toLocaleString()}</td>
        </tr>
    `).join('') + `
        <tr class="total">
            <th colspan="4">Total</th>
            <td>$${totalAmount.toLocaleString()}</td>
        </tr>
    `;

    // Add amount in words section after the table
    const amountInWordsDiv = document.createElement('div');
    amountInWordsDiv.className = 'amount-in-words';
    amountInWordsDiv.innerHTML = `
        <div class="amount-label">Amount to be paid: $${totalAmount.toLocaleString()}</div>
        <div class="amount-words">${amountInWords} US Dollars</div>
    `;
    itemsContainer.parentNode.insertAdjacentElement('afterend', amountInWordsDiv);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', updateDOM); 