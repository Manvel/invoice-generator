import { numberToWords } from './numberToWords.js';
import { state } from './data.js';

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

    // Update amount in words
    document.querySelector('[data-invoice="totalAmount"]').textContent = `Amount to be paid: $${totalAmount.toLocaleString()}`;
    document.querySelector('[data-invoice="amountInWords"]').textContent = `${amountInWords} US Dollars`;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', updateDOM); 