# Invoice Generator

A simple, lightweight invoice generator built with vanilla JavaScript. This application uses minimal dependencies and esbuild for efficient bundling, making it easy to maintain and deploy.

## Features

- Clean, professional invoice layout
- Minimal dependencies (only lit-html for templating)
- Simple data-attribute based templating
- Automatic total calculation
- Supports multiple invoice items
- Detailed bank information including:
  - Beneficiary details
  - IBAN
  - BIC/SWIFT code
  - Bank name and address
  - Correspondent bank BIC
- Company and client information sections
- Digital signature blocks
- Fast builds with esbuild
- Built-in development server with live reload
- Automatic file watching and regeneration

## Getting Started

### Prerequisites

- Node.js

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
This will:
- Start a development server
- Watch for changes in your source files
- Automatically rebuild when changes are detected
- Open the application in your default browser

2. For production build:
```bash
npm run build
```
This will create a bundled version in the `dist` directory.

## Customizing the Invoice

### Modifying Company Information

Edit the `state.provider` object in `src/data.js` to update your company details:

```javascript
provider: {
    name: "Your Company Name",
    address: "Your Address",
    city: "Your City",
    country: "Your Country",
    tin: "Your Tax ID",
    tinName: "TIN/NIE",
    beneficiary: "Your Name",
    iban: "Your IBAN",
    swift: "Your BIC/SWIFT Code",
    bankName: "Your Bank Name",
    bankAddress: "Your Bank Address",
    correspondentSwift: "Your Correspondent Bank BIC"
}
```

### Adding Invoice Items

Modify the `state.invoice.items` array in `src/data.js`:

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

Update the `state.client` object in `src/data.js`:

```javascript
client: {
    name: "Client Name",
    address: "Client Address",
    city: "Client City",
    country: "Client Country"
}
```

### Updating Invoice Details

Modify the `state.invoice` object in `src/data.js`:

```javascript
invoice: {
    number: "Invoice Number",
    date: "Invoice Date",
    agreementDate: "Agreement Date",
    items: [...]
}
```

## Project Structure

```
invoice-generator/
├── src/
│   ├── app.js         # Main application logic
│   ├── data.js        # Invoice data and configuration
│   ├── index.html     # Invoice template
│   └── numberToWords.js # Number to words conversion
├── dist/              # Built files
├── styles.css         # Invoice styles
└── package.json       # Project configuration
```

## Development

The project uses esbuild for fast builds and a custom build script for file watching. When you run `npm run dev`:

1. The build script watches for changes in the `src` directory
2. Any changes trigger a rebuild of the project
3. The development server automatically serves the updated files

## License

This project is licensed under the MIT License - see the LICENSE file for details.

