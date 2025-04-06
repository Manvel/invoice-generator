export const state = {
    provider: {
        name: "John Doe PE",
        address: "Example 3 str., Apt. 101",
        city: "Amsterdam",
        country: "Netherlands",
        tin: "12345678",
        tinName: "NIE",
        beneficiary: "John Doe PE",
        iban: "ES91 2100 0418 4502 0005 1332",
        swift: "MOCKAM22",
        bankName: "MOCK BANK CJSC",
        bankAddress: "123 Mock Street, 5th Floor, 28001, Madrid, Spain",
        correspondentSwift: "MOCKEM22"
    },
    client: {
        name: "Mock Client Inc.",
        nameSign: "Mock Client Inc.",
        address: "123 Example Street",
        city: "San Francisco, CA 34102",
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