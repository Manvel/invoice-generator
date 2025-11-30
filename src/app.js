import { numberToWords } from './numberToWords.js';
import { state } from './data.js';
import { html, render } from 'lit-html';

// Helper function to update elements with data attributes
function updateElements(category, data) {
    document.querySelectorAll(`[data-${category}]`).forEach(element => {
        const field = element.getAttribute(`data-${category}`);
        if (data[field] !== undefined && field !== 'items') {
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

    // Hide client sign-block if nameSign is not provided
    const clientSignBlock = document.querySelectorAll('.sign-block')[1];
    if (clientSignBlock) {
        const hasSignature = state.client?.nameSign && state.client.nameSign.trim() !== '';
        clientSignBlock.style.display = hasSignature ? '' : 'none';
    }

    // Update invoice items
    const itemsContainer = document.querySelector('[data-invoice="items"]');
    const totalAmount = state.invoice.items.reduce((sum, item) => sum + item.amount, 0);
    const amountInWords = numberToWords(totalAmount);
    
    const itemsTemplate = html`
        ${state.invoice.items.map((item, index) => html`
            <tr>
                <td>${index + 1}</td>
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.period}</td>
                <td>$${item.amount.toLocaleString()}</td>
            </tr>
        `)}
        <tr class="total">
            <th colspan="4">Total</th>
            <td>$${totalAmount.toLocaleString()}</td>
        </tr>
    `;
    
    render(itemsTemplate, itemsContainer);

    // Update amount in words
    const amountLabel = document.querySelector('[data-invoice="totalAmount"]');
    const amountWords = document.querySelector('[data-invoice="amountInWords"]');
    
    render(html`Amount to be paid: $${totalAmount.toLocaleString()}`, amountLabel);
    render(html`${amountInWords} US Dollars`, amountWords);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', updateDOM); 