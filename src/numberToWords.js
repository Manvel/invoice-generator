export function numberToWords(num) {
    if (num === 0) return 'zero';
    if (num >= 1000000000) return 'number too large';

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    function convertLessThanHundred(n) {
        if (n === 0) return '';
        if (n < 10) return ones[n];
        if (n < 20) return teens[n - 10];
        return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + ones[n % 10] : '');
    }

    function convertLessThanThousand(n, useAnd = true) {
        if (n === 0) return '';
        if (n < 100) return convertLessThanHundred(n);
        
        const hundreds = Math.floor(n / 100);
        const remainder = n % 100;
        return ones[hundreds] + ' hundred' + (remainder > 0 ? (useAnd ? ' and ' : ' ') + convertLessThanHundred(remainder) : '');
    }

    function convert(n) {
        if (n === 0) return '';
        
        const thousands = Math.floor(n / 1000);
        const remainder = n % 1000;

        if (thousands === 0) return convertLessThanThousand(remainder);

        const thousandsText = convertLessThanThousand(thousands, false) + ' thousand';
        if (remainder === 0) return thousandsText;

        return thousandsText + ' ' + convertLessThanThousand(remainder);
    }

    return convert(num);
} 