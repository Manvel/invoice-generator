# Invoice Generator

A simple, lightweight invoice generator built with vanilla JavaScript. This application uses minimal dependencies and esbuild for efficient bundling, making it easy to maintain and deploy.

## Features

- Clean, professional invoice layout
- Minimal dependencies (only lit-html for templating)
- Simple data-attribute based templating
- Automatic total calculation
- Supports multiple invoice items
- Bank details and company information
- Client information section
- Digital signature blocks
- Fast builds with esbuild

## Getting Started

### Prerequisites

- Node.js (for development server)

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd invoice-generator
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

1. For development:
```bash
npm run dev
```
This will start a local server and open the application in your default browser.

2. For production build:
```bash
npm run build
```
This will create a bundled version in the `dist` directory.

## Customizing the Invoice

### Modifying Company Information

Edit the `state.provider` object in `src/app.js` to update your company details:

```javascript
provider: {
    name: "Your Company Name",
    address: "Your Address",
    city: "Your City",
    country: "Your Country",
    tin: "Your Tax ID",
    bankAccount: "Your Bank Account",
    bankName: "Your Bank Name",
    swift: "Your SWIFT Code",
    bankAddress: "Your Bank Address",
    intermediaryBank: "Your Intermediary Bank",
    intermediarySwift: "Your Intermediary SWIFT"
}
```

### Adding Invoice Items

Modify the `state.invoice.items` array in `src/app.js`:

```javascript
items: [
    {
        description: "Service Description",
        quantity: 1,
        period: "Service Period",
        amount: 1000
    }
]
```

### Updating Client Information

Update the `state.client` object in `src/app.js`:

```javascript
client: {
    name: "Client Name",
    address: "Client Address",
    city: "Client City",
    country: "Client Country"
}
```

## Project Structure

```
invoice-generator/
├── index.html          # Main HTML template
├── styles.css          # Styles for the invoice
├── src/
│   └── app.js         # Application logic and state management
└── dist/
    └── bundle.js      # Bundled JavaScript (generated)
```

## Development

The application uses:
- Data attributes for dynamic content (`data-provider`, `data-client`, `data-invoice`)
- ES6+ JavaScript
- esbuild for bundling
- http-server for local development

## License

This project is licensed under the MIT License - see the LICENSE file for details.

