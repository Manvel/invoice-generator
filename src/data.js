export const state = {
    provider: {
        name: "John Doe PE",
        address: "Example 3 str., Apt. 101",
        city: "Amsterdam",
        country: "Netherlands",
        tin: "12345678",
        tinName: "TIN",
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